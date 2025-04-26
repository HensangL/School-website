import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <ul className="nav-list">
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/about'>About</Link></li>
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