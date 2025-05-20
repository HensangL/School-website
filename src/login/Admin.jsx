import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/V1/admin/login",
        data: { email, password },
        ...(rememberMe && { withCredentials: true }),
      });
      if (response.data.status === "Success") {
        navigate("/admindash-only");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      // Optionally show error to user
    }
  };

  return (
    <div className="main">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="">Forgot password</a>
          <button type="button" onClick={handleSubmit}>
            Open Admin Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
