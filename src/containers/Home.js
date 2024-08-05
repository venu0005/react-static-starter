import React from 'react';
 // Import specific styles for the Home page

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <img src={logoImg} alt="Logo" className="home-logo" />
      <h1>Welcome to My Hobbies Website</h1>
    </header>
    <section className="home-intro">
      <p>
        Hello! I'm excited to share my passions with you. This website is dedicated to showcasing three of my favorite hobbies: Photography, Gaming, and Football.
      </p>
      <p>
        Here you will find a collection of my experiences, favorite moments, and personal reflections on each of these hobbies. I hope you enjoy exploring as much as I enjoy participating in these activities!
      </p>
    </section>
    <nav className="home-nav">
      <ul>
        <li><a href="/photography">Photography</a></li>
        <li><a href="/gaming">Gaming</a></li>
        <li><a href="/football">Football</a></li>
      </ul>
    </nav>
  </div>
);

export default Home;
