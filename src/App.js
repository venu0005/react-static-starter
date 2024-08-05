import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

export default () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My Hobby Site</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/photography">Photography</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gaming">Gaming</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/football">Football</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
