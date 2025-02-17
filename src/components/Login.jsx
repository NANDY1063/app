import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import favicon from "../assets/favicon.png";
import "../App.css";

const Login = () => {
  const [employeeNo, setEmployeeNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { employeeNo, password });
    alert("Login functionality is disabled.");
  };

  return (
    <div className="signup-container">
      <img src={favicon} alt="Logo" className="signup-logo" />
      <form id="signup-form" onSubmit={handleSubmit}>
        <h5 className="signup-title">
          Welcome Back!<br /> Please Enter Your Details
        </h5>

        <span>Employee No:</span>
        <input
          type="text"
          placeholder="Enter your employee number"
          value={employeeNo}
          onChange={(e) => setEmployeeNo(e.target.value)}
          required
        />

        <span>Password:</span>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember for 30 days</label>
          <a href="#" style={{ marginLeft: "10rem" }}>Forgot Password?</a>
        </div>

        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
};

export default Login;
