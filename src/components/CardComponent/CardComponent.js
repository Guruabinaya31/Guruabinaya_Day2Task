import React, { useState } from 'react';
import './CardComponent.css'; // Make sure to create this CSS file for styling
import { Heart } from 'lucide-react'; // Ensure you have the lucide-react package installed

const CardComponent = ({ title, description, imageUrl, location, price }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img 
          src={imageUrl || "https://via.placeholder.com/300x200"} 
          alt={title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200"; // Placeholder image in case of error
          }}
        />
        <button 
          className="heart-button"
          onClick={handleLikeClick}
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <Heart 
            className={`heart-icon ${isLiked ? 'liked' : ''}`} 
            fill={isLiked ? "#ff0000" : "none"}
            color={isLiked ? "#ff0000" : "#ffffff"}
          />
        </button>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <p className="card-location">{location}</p>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;