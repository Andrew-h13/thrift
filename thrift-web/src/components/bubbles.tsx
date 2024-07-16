import React from "react";
import "../styles/bubbles.css";

const Bubbles: React.FC = () => {
  const bubbles = Array.from({ length: 20 }).map((_, i) => {
    // Generate random RGBA color
    const fillOpacity = 0.3 + Math.random() * 0.7;
    const fillColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, ${fillOpacity})`;

    return (
      <circle
        key={i}
        className="bubble"
        cx={Math.random() * 500}
        cy={Math.random() * 500}
        r={5 + Math.random() * 15}
        fill={fillColor}
      />
    );
  });

  return (
    <svg
      className="ocean-illustration"
      width="100%"
      height="400"
      viewBox="300 0 100 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bubbles}
    </svg>
  );
};

export default Bubbles;
