import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

// Prevent default drag behavior on images
const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate(); // Used for programmatic navigation

  // Map through homeCarouselData to create carousel items
  const items = homeCarouselData.map((item, index) => (
    <img
      key={index} // Ensure each item has a unique key for React
      className="cursor-pointer" // Add pointer cursor to indicate clickable items
      onClick={() => navigate(item.path)} // Navigate to the item's path on click
      src={item.image} // Set image source
      alt={`Carousel Item ${index + 1}`} // Add alt text for accessibility
      onDragStart={handleDragStart} // Prevent image drag
      role="presentation" // Indicate that this image is for presentational use
    />
  ));

  return (
    <AliceCarousel
      mouseTracking // Enable mouse tracking
      items={items} // Carousel items from homeCarouselData
      autoPlay // Enable autoplay
      infinite // Enable infinite looping
      autoPlayInterval={2000} // Set autoplay interval to 2000ms (2 seconds)
      disableButtonsControls // Disable next/previous buttons
    />
  );
};

export default HomeCarousel;
