import React from 'react';
import HobbyTemplate from '../templates/HobbyTemplate'; // Import the HobbyTemplate
//import '../styles/Hobby1.css'; // Import specific styles for the Hobby1 page

const Hobby1 = () => (
  <HobbyTemplate>
    <div>
      <h1>Photography</h1>
      <p>I love capturing moments through my camera lens. Photography allows me to express my creativity and see the world from different perspectives.</p>
      <div className="photo-gallery">
        <img src='/images/Photography.JPG' alt="Photography" className="center" />
        {/* Add more images if needed */}
      </div>
    </div>
  </HobbyTemplate>
);

export default Hobby1;
