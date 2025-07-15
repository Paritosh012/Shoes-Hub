import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, username, email, password, phone, address } = formData;
    if (!fullName || !username || !email || !password || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.get("http://localhost:3000/users");
      const existing = res.data.find(
        (user) => user.email === email || user.username === username
      );
      if (existing) {
        setError("User with this email or username already exists.");
        return;
      }

      await axios.post("http://localhost:3000/users", formData);
      setError("");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="signup-input"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="signup-form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="signup-input"
              placeholder="johndoe123"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="signup-form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="signup-input"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="signup-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="signup-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="signup-input"
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="signup-form-group">
            <label>Address</label>
            <textarea
              name="address"
              className="signup-input"
              rows="3"
              placeholder="Your delivery address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
