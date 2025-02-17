// src/components/Signup.js
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import favicon from "../assets/favicon.png";
import "../App.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    empNo: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("====> Form Data:", form);
      const response = await axios.post("http://localhost:5000/api/signup", form);
      console.log("Response:", response.data);
      alert("Your signup is successfully done!");
      navigate("/login"); 
    } 
    catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <img src={favicon} alt="Logo" className="signup-logo" />
      <form onSubmit={handleSubmit} id="signup-form">
        <h4 className="signup-title">Start your Journey!</h4>

        <span>Name:</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          minLength="4"
          value={form.name}
          onChange={handleChange}
        />

        <span>Employee No:</span>
        <input
          type="text"
          name="empNo"
          placeholder="Enter your employee number"
          required
          minLength="4"
          value={form.empNo}
          onChange={handleChange}
        />

        <span>Phone No:</span>
        <input
          type="tel"
          name="phoneNo"
          placeholder="Enter your mobile number"
          required
          maxLength="10"
          value={form.phoneNo}
          onChange={handleChange}
        />

        <span>Email Id:</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <span>Password:</span>
        <input 
          type="password"  
          name="password"  
          placeholder="Enter your password"   
          required  
          value={form.password}   
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;