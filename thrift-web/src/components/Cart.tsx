import React, { useEffect, useRef, useState } from "react";
import "../styles/cart.css";
import { useCart } from "./Cart-context";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

const Cart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartPopupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("/myapp/cart/items/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: CartItem[] = await response.json();
      console.log("Fetched cart items:", data);
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartPopupRef.current &&
      !cartPopupRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsCartOpen(false);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetchCartItems();

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="cart-container">
        <button
          className={`cart-button ${isCartOpen ? "active" : ""}`}
          onClick={toggleCart}
          ref={buttonRef}
        >
          <i
            className={`bx ${
              isCartOpen ? "bx-x" : "bx-cart"
            } icon-group carticon`}
          ></i>
        </button>
        <div className="item-counter">
          <p>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
        </div>
        {isCartOpen && (
          <div ref={cartPopupRef} id="chatPopup" className={`chat-popup show`}>
            <div className="form-container">
              <div className="cart-header">Your Cart</div>
              <div className="cart-body">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-quantity">
                        x {item.quantity}
                      </div>
                      <div className="cart-item-price">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="cart-total">
                Total: ${calculateTotal().toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
