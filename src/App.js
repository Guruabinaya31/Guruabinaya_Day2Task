import React from 'react';
import CardComponent from './components/CardComponent/CardComponent';
import './App.css';
import img1 from './assets/images/img4.jpg';
import img2 from './assets/images/img2.jpeg';
import img3 from './assets/images/img5.jpg';

const App = () => {
  const cardData = [
    {
      title: "Mountain Resort",
      description: "Experience luxury in the heart of the mountains with breathtaking views and premium amenities.",
      imageUrl: img1, // Use the imported image
      location: "Swiss Alps",
      price: "299.99"
    },
    {
      title: "Beach Paradise",
      description: "Relax in our oceanfront villa with private beach access and stunning sunset views.",
      imageUrl: img2, // Use the imported image
      location: "Maldives",
      price: "399.99"
    },
    {
      title: "Forest Retreat",
      description: "Escape to nature in our cozy cabin surrounded by ancient trees and wildlife.",
      imageUrl: img3, // Use the imported image
      location: "Canadian Rockies",
      price: "199.99"
    }
  ];

  return (
    <div className="app">
      <h1 className="app-title">Travel Dreamscapes</h1>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl} // Pass the imported image URL
            location={card.location}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default App;