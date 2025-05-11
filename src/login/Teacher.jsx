import React from 'react'
import { useNavigate } from 'react-router'

function Teacher() {
  const navigate=useNavigate();
  const handlenavigate =() =>{
    navigate('/teacherdash');
  }
  return (
    <div className='main'>
      <div className='form-container'>
        <h1 >Login</h1>
      <form action="">
      Email<input type="email" placeholder='Enter email' />
        Password <input type="text" placeholder='********' />
        <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>              
      <a href="">Forgot password
        </a>
        <button onClick={handlenavigate}>Dashboard</button>
      </form>
      </div>
    </div>
  )
}

export default Teacher