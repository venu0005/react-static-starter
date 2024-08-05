import React from 'react';
import HobbyTemplate from '../templates/HobbyTemplate'; // Import the HobbyTemplate


const Hobby2 = () => (
  <HobbyTemplate>
    <div>
      <h1>Gaming</h1>
      <p>Gaming is one of my favorite pastimes. It helps me unwind and I enjoy playing a variety of games across different genres.</p>
      <div>
        <img src="/images/Games.jpg" alt="Gaming" className="center" />
      </div>
    </div>
  </HobbyTemplate>
);

export default Hobby2;