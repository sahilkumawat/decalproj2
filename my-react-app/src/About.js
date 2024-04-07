import React from 'react';
import './About.css';

function About() {
  const handleBackHome = () => {
    window.location.href = '/'; // Navigate back to the home page
  };

  return (
    <div className="about-container">
      <button onClick={handleBackHome} className="backed-button">Back to Home</button>
      <header>
        <h1 classname="page-title">Noteworthy</h1>
      </header>
      <div>
        <h3>In-vest-ed in A Cappella</h3>
        <p>We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</p>
        <p>Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</p>
      </div>
    </div>
  );
  }

export default About;
