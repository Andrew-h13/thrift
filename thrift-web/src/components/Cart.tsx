import React, { useEffect, useRef, useState } from "react";
import '../styles/cart.css';
import { useCart } from './Cart-context';






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
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Sample Item 1', quantity: 1, price: 10, imageUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Sample Item 2', quantity: 2, price: 20, imageUrl: 'https://via.placeholder.com/50' }
  ]);


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
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <div className="cart-container">
      <button className={`cart-button ${isCartOpen ? 'active' : ''}`} onClick={toggleCart} ref={buttonRef}>
          <i className={`bx ${isCartOpen ? 'bx-x' : 'bx-cart'} icon-group carticon`}></i>
        </button>
        <div className="item-counter">
        <p>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
        </div>
        {isCartOpen && (
          <div ref={cartPopupRef} id="chatPopup" className={`chat-popup show`}>
            <div className="form-container">
            <div className="cart-header">Your Cart</div>
              <div className="cart-body">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-quantity">x {item.quantity}</div>
                  </div>
                ))}
              </div>
              <div className="cart-total">Total: ${calculateTotal().toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
