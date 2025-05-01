import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)
  const [showAbout, setShowAbout] = useState(false)


  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <ul className="nav-list">
          <li><Link to='/' >Home</Link></li>
          <li className="dropdown-parent" 
          onMouseEnter={() =>setShowAbout(true)}
          onMouseLeave={() =>setShowAbout(false)}><Link to='/about'>About
          {showAbout && (
            <div className="login-dropdown">
                <Link to='/principal' >Principal's message</Link>
                <Link to='/chairman'>Chairmen's message</Link>
                <Link to='/team'>Meet the teachers</Link>

            </div>
          )
        }
          
          </Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li className="dropdown-parent"
              onMouseEnter={() => setShowLoginDropdown(true)}
              onMouseLeave={() => setShowLoginDropdown(false)}>
            Login
            {showLoginDropdown && (
              <div className="login-dropdown">
                <Link to='/admin' >Admin Login</Link>
                <Link to='/student' >Student Login</Link>
                <Link to='/teacher' >Teacher Login</Link>

              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar