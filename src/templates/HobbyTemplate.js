import React from 'react';
import './HobbyTemplate.css'; // Ensure to import your CSS file

const HobbyTemplate = ({ children }) => (
  <div className="hobby-template">
    <header className="hobby-header">Hobby Template Header</header>
    <main className="hobby-content">
      {children}
    </main>
    <footer className="hobby-footer">Hobby Template Footer</footer>
  </div>
);

export default HobbyTemplate;
