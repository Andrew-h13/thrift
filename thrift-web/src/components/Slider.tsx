import React from "react";
import "../styles/Slider.css";





interface CardData {
  id: number;
  title: string;
  description: string;
  description2: string;
  image: string;
  price: string;
}

const Slide = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "https://i.ebayimg.com/images/g/5XUAAOSw0flknCu4/s-l1600.webp",
      title: "Stussy Angel Tee",
      description: "Brand new with tags",
      description2: "Size Small",
      price: "$80.00",
    },
    {
      image: "https://i.ebayimg.com/images/g/YXMAAOSwVuFkkzFx/s-l1600.webp",
      title: "Supreme San Francisco Box Logo",
      description: "Brand new with tags",
      description2: "Size Small",
      price: "$80.00",
    },
    {
      image:
        "https://img.gem.app/904481723/1f/1716313249/vintage-carhartt-detroit-jacket.jpg",
      title: "vintage Carhartt detroit jacket",
      description: "Vintage with distress",
      description2: "Size Medium",
      price: "$80.00",
    },
    {
      image: "https://i.ebayimg.com/images/g/ffgAAOSwAFJmkLMD/s-l1600.webp",
      title: "Vintage JNCO Jeans",
      description: "Vintages Looks brand new",
      description2: "Size 36",
      price: "$80.00",
    },
    {
      image: "https://i.ebayimg.com/images/g/YbQAAOSwSS1jdv5t/s-l1600.webp",
      title: "Asus ROG Strix RTX 4090",
      description: "Used a couple times comes with box",
      description2: "Tested and works",
      price: "$80.00",
    },
    {
      image: "https://i.ebayimg.com/images/g/3o0AAOSw-F9mlrQO/s-l1600.webp",
      title: "Disney Lilo & Stitch snow globe",
      description: "Very rare and in Amazing Condition",
      description2: "No flaws ",
      price: "$80.00",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  if (currentIndex > cards.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
    console.log("hi");
  }
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-cards">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div className="carousel-card" key={index}>
                <img className="card-image" src={card.image} alt="Card" />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <p className="card-description">{card.description2}</p>
                <div className="check-out">
                  <p className="price-text">{card.price}</p>
                  <button className="card-button">add to cart</button>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="prev-button" onClick={handlePrev}>
              <i className="bx bx-anchor iconam"></i>
            </button>
            <button className="next-button" onClick={handleNext}>
              <i className="bx bx-anchor iconam"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
