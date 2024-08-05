import React from 'react';
import '../styles/Hobby1.css'; // Import your CSS file for styling

export default () => (
  <div>
    <h1>Photography</h1>
    <p>I love capturing moments through my camera lens. Photography allows me to express my creativity and see the world from different perspectives.</p>

    <div className="photo-gallery">
      <img src='/images/Photography.JPG' alt="Photo" className="center" />
      {/* Add more images as needed */}
    </div>
  </div>
);
