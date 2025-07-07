import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNavigate = () => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setError('');
      navigate('/admindash-only');
    } else {
      setError('Invalid username or password');
    }
  }

  return (
    <div className='main'>
      <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          Username 
          <input 
            type="text" 
            placeholder='Enter username' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          Password 
          <input 
            type="password" 
            placeholder='********' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          
          <a href="#">Forgot password</a>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <button type="button" onClick={handleNavigate}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Admin;
