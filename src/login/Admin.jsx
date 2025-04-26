import React from 'react'
import { Link } from 'react-router'

function Admin() {
  return (
    <div className='main'>
      <div className='form-container'>
        <h1 >Login</h1>
      <form >
      Username<input type="text" placeholder='Enter username' />
        Password <input type="text" placeholder='********' />
        <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>        <a href="">Forgot password
        </a>
        <a href="/admindash-only" target="_blank" rel="noopener noreferrer">
  <button>Open Admin Dashboard</button>
</a>
<a href="/admindashboard" target='_blank'>Admin Dashboard</a>
      </form>
      </div>
    </div>
  )
}

export default Admin
