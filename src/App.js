import React from "react";
import "./App.css";
import Bucket from "./components/bucket/Bucket";

function App() {
  const vegetables = [
    { id: 1, name: "Carrots", price: "$1.99", image: "carrots.jpg" },
    { id: 2, name: "Broccoli", price: "$2.49", image: "broccoli.jpg" },
    { id: 3, name: "Tomatoes", price: "$0.99", image: "tomatoes.jpg" },
    { id: 4, name: "Carrots", price: "$1.99", image: "carrots.jpg" },
    { id: 5, name: "Broccoli", price: "$2.49", image: "broccoli.jpg" },
    { id: 6, name: "Tomatoes", price: "$0.99", image: "tomatoes.jpg" },
    // Add more vegetables as needed
  ];

  return (
    <div>
      <header className="header">
        <h1>Online Vegetable Store</h1>
      </header>
      <Bucket />
      <div className="vegetable-container">
        {vegetables.map((vegetable) => (
          <div key={vegetable.id} className="vegetable-card">
            <img
              src={vegetable.image}
              alt={vegetable.name}
              className="vegetable-image"
            />
            <h3>{vegetable.name}</h3>
            <p>{vegetable.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
