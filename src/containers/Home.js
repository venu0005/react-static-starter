import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Welcome to My Hobbies Website</h1>
      <p>Explore my passions: Photography, Gaming, and Football</p>
    </header>
    <section className="home-intro">
      <p>
        Hello and welcome! I’m delighted to share with you the things I love the most. This website is dedicated to three of my greatest passions: Photography, Gaming, and Football. Each of these hobbies brings me joy and helps me express myself in unique ways.
      </p>
      <p>
        Whether you’re here to admire my photography, learn about my gaming adventures, or understand my enthusiasm for football, you’re in the right place. Dive into each section to explore more about what makes these hobbies so special to me.
      </p>
    </section>
    <section className="home-hobbies">
      <h2>My Hobbies</h2>
      <div className="hobby-item">
        <h3>Photography</h3>
        <p>
          Photography is a way for me to capture the world as I see it. I enjoy taking photos of landscapes, people, and moments that inspire me. Each photo tells a story and captures a slice of time that I can cherish forever.
        </p>
        <p>
          Explore my photo gallery to see some of my favorite shots and the stories behind them.
        </p>
        <a href="/photography" className="hobby-link">View Photography Gallery</a>
      </div>
      <div className="hobby-item">
        <h3>Gaming</h3>
        <p>
          Gaming is more than just a pastime for me; it's a passion. I love exploring different game worlds, mastering new challenges, and connecting with other gamers. From strategy games to action-packed adventures, gaming offers an escape and a thrill that I eagerly embrace.
        </p>
        <p>
          Check out my gaming section to see my favorite games and some memorable experiences I’ve had.
        </p>
        <a href="/gaming" className="hobby-link">Discover My Gaming Adventures</a>
      </div>
      <div className="hobby-item">
        <h3>Football</h3>
        <p>
          Football is not just a sport for me, but a way of life. Whether playing on the field or cheering from the stands, the game brings excitement and a sense of community. It keeps me active and provides countless memories with friends and fellow enthusiasts.
        </p>
        <p>
          Explore the football section to read about my favorite matches, players, and experiences.
        </p>
        <a href="/football" className="hobby-link">Learn More About Football</a>
      </div>
    </section>
    <footer className="home-footer">
      <p>© {new Date().getFullYear()} My Hobbies Website. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;
