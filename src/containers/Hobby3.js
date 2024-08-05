import React from 'react';
import HobbyTemplate from '../templates/HobbyTemplate'; // Import the HobbyTemplate


const Football = () => (
  <HobbyTemplate>
    <div>
      <h1>Football</h1>
      <p>Football is not just a sport for me, but a passion. I love playing and watching football, and it keeps me fit and active.</p>
      <div>
        <img src="/images/Football.jpg" alt="Football" className="center" /> 
      </div>
    </div>
  </HobbyTemplate>
);

export default Football;