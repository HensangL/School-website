import React from 'react'

function Teacher() {
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
      </div>              <a href="/teacherdash">Teacherdashboard</a>
      <a href="">Forgot password
        </a>
        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Teacher