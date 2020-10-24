import React from 'react'

// Components
import ThemeSwitch from './ThemeSwitch'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <nav className="navigation">
        <div className="nav-wrapper">
          <a href="/" className="logo">
            Weather app
          </a>
          <ThemeSwitch />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
