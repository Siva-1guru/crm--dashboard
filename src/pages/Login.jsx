 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For redirection

  const handleLogin = (e) => {
    e.preventDefault();

    // Navigate to dashboard directly without checking credentials
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">LOGIN</button>
        </form>
        
        <p className="toggle-auth">
          <Link to="/register">Register here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
