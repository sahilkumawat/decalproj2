import React, { useState } from 'react';
import './Videos.css'; // Ensure the CSS file is named Videos.css and is in the same directory

function Videos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoLinks = [
    "https://www.youtube.com/embed/kW57PpibCMA",
    "https://www.youtube.com/embed/cDjY-1WuB3o",
    "https://www.youtube.com/embed/oNoCPGvcCdI",
    "https://www.youtube.com/embed/Qv1kHcRoAAg",
    "https://www.youtube.com/embed/8uKhn8dk5Os"
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videoLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videoLinks.length - 1 : prevIndex - 1
    );
  };

  const handleBackHome = () => {
    window.location.href = '/'; // This will redirect the user to the home page.
  };

  return (
    <div className="video-carousel-container">
      <div className="top-section">
        <button className="back-button" onClick={handleBackHome}>Back to Home</button>
        <h1 className="page-title">Our Favorite Videos</h1>
      </div>
      <div className="video-carousel">
        <button className="carousel-control left" onClick={prevVideo}>{"<"}</button>
        <div className="video-container">
          <iframe
            title="Video"
            width="560"
            height="315"
            src={videoLinks[currentVideoIndex]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button className="carousel-control right" onClick={nextVideo}>{">"}</button>
      </div>
      <footer>
        <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank" rel="noopener noreferrer">Find us on YouTube</a>
      </footer>
    </div>
  );
}

export default Videos;
