import React from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/admindash-only');
  }

  return (
    <div className='main'>
      <div className='form-container'>
        <h1>Login</h1>
        <form>
          Username <input type="text" placeholder='Enter username' />
          Password <input type="text" placeholder='********' />
          
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          
          <a href="">Forgot password</a>
          
          <button type="button" onClick={handleNavigate}>Open Admin Dashboard</button>

        </form>
      </div>
    </div>
  )
}

export default Admin;
