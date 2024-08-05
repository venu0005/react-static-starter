// src/templates/Template.js
import React from 'react';
import { Link } from 'react-static';
import './Template.css'; // Import your CSS file here

const Template = ({ children }) => (
  <div className="template-container">
    <header className="template-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/gaming">Gaming</Link>
        <Link to="/football">Football</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
    <main className="template-content">
      {children}
    </main>
    <footer className="template-footer">
      <p>© 2024 Your Name. All rights reserved.</p>
    </footer>
  </div>
);

export default Template;
