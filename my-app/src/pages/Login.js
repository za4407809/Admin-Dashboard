import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fakeUser = { username: "admin", password: "admin123" };

  const handleLogin = () => {
    if (username === fakeUser.username && password === fakeUser.password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
        <p className="forgot-password">Forgot password?</p>
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
