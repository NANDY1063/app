import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import favicon from "../assets/favicon.png";
import "../App.css";

const Login = () => {
  const [employeeNo, setEmployeeNo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = { employeeNo, password };
      console.log("====> Form Data:", form);

      const response = await axios.post("http://localhost:5000/login",form);
      console.log("Response:", response.data.data);

      if (response.data.success) {
        alert("Your login is successfully done!");
        navigate("/dashboard");
      } else {
        alert("Invalid login credentials!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed. Please try again.");
    }
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
          type="text" // Changed from tel to text
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
