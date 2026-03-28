import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        form
      );

      login(res.data.token);
      navigate("/");
    } catch (error) {
      alert("Invalid Credentials");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-card">

        <h2 className="login-title">Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login-input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login-input"
          onChange={handleChange}
        />

        <button className="login-button">Login</button>

      </form>
    </div>
  );
};

export default Login;