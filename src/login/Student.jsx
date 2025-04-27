import React from 'react'
import Studentdashboard from '../dashboard/Studentdashboard'
function Student() {
  return (
    <div className='main'>
      <div className='form-container'>
        <h1 >Login</h1>
      <form action="get">
      Email<input type="email" placeholder='Enter email' />
        Password <input type="text" placeholder='********' />
        <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>          <a href="">Forgot password
        </a>
        <button>Submit</button>
        <a href="/studentdashboard" target='_blank'>Student Dashboard</a>

      </form>
      </div>
    </div>
  )
}

export default Student