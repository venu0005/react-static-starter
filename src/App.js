import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from 'components/Router'
import './app.css'

function App() {
  return (
    <Root>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My Site</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <Router>
          <Routes path="*" />
        </Router>
      </div>
    </Root>
  )
}

export default App
