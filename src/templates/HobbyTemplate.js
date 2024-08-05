import React from 'react';
import './HobbyTemplate.css'; // Ensure to import your CSS file

const HobbyTemplate = ({ children }) => (
  <div className="hobby-template">
    <header className="hobby-header">MY Hobbies</header>
    <main className="hobby-content">
      {children}
    </main>
    <footer className="hobby-footer">Abhijith (©) </footer>
  </div>
);

export default HobbyTemplate;
