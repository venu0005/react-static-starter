import React from 'react'


export default () => (
  <div className="home-container container">
    <header className="home-header text-center my-4">
      <h1>Welcome to My Hobbies Website</h1>
      <p>Explore my passions: Photography, Gaming, and Football</p>
    </header>
    <section className="home-intro text-center mb-4">
      <p>
        Hello and welcome! I'm delighted to share with you the things I love the most. This website is dedicated to three of my greatest passions: Photography, Gaming, and Football. Each of these hobbies brings me joy and helps me express myself in unique ways.
      </p>
      <p>
        Whether you're here to admire my photography, learn about my gaming adventures, or understand my enthusiasm for football, you're in the right place. Dive into each section to explore more about what makes these hobbies so special to me.
      </p>
    </section>
    <section className="home-hobbies">
      <h2 className="text-center mb-4">My Hobbies</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="hobby-item card">
            <img src="/images/Photography.JPG" alt="Photography" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Photography</h3>
              <p className="card-text">
                Photography is a way for me to capture the world as I see it. I enjoy taking photos of landscapes, people, and moments that inspire me. Each photo tells a story and captures a slice of time that I can cherish forever.
              </p>
              <a href="/photography" className="btn btn-primary">View Photography Gallery</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="hobby-item card">
            <img src="/images/Games.jpg" alt="Gaming" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Gaming</h3>
              <p className="card-text">
                Gaming is more than just a pastime for me; it's a passion. I love exploring different game worlds, mastering new challenges, and connecting with other gamers. From strategy games to action-packed adventures, gaming offers an escape and a thrill that I eagerly embrace.
              </p>
              <a href="/gaming" className="btn btn-primary">Discover My Gaming Adventures</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="hobby-item card">
            <img src="/images/Football.jpg" alt="Football" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Football</h3>
              <p className="card-text">
                Football is not just a sport for me, but a way of life. Whether playing on the field or cheering from the stands, the game brings excitement and a sense of community. It keeps me active and provides countless memories with friends and fellow enthusiasts.
              </p>
              <a href="/football" className="btn btn-primary">Learn More About Football</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="home-footer text-center py-3">
      <p>© {new Date().getFullYear()} My Hobbies Website. All rights reserved.</p>
    </footer>
  </div>
);



