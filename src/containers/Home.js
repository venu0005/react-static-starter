import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Welcome to My Hobbies Website</h1>
      <p>Discover my passions: Photography, Gaming, and Football.</p>
    </header>
    <section className="home-intro">
      <p>
        Hello! I’m thrilled to share my hobbies with you. This site features three of my favorite activities. Explore my photography collection, find out about my gaming experiences, and learn about my love for football.
      </p>
    </section>
    <section className="home-links">
      <h2>Explore My Hobbies</h2>
      <ul>
        <li><a href="/photography">Photography</a></li>
        <li><a href="/gaming">Gaming</a></li>
        <li><a href="/football">Football</a></li>
      </ul>
    </section>
    <footer className="home-footer">
      <p>© {new Date().getFullYear()} My Hobbies Website</p>
    </footer>
  </div>
);

export default Home;
