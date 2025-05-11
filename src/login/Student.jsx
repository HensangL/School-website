import React from 'react'
import Studentdashboard from '../dashboard/Studentdashboard'
import { useNavigate } from 'react-router-dom';

function Student() {
  const navigate=useNavigate();
const handleNavigate =()=>{
  navigate('/studentdashboard');
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
      </div>          <a href="">Forgot password
        </a>
        <button onClick={handleNavigate}>Open dashboard</button>

      </form>
      </div>
    </div>
  )
}

export default Student