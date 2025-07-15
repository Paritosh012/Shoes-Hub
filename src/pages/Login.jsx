import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = userData.find(
      (user) =>
        user.username === formData.username &&
        user.email === formData.email &&
        user.password === formData.password
    );

    if (matchedUser) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username, email, or password.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="signup-form-group">
            <label htmlFor="username" className="signup-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="signup-input"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="email" className="signup-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="signup-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="signup-form-group">
            <label htmlFor="password" className="signup-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="signup-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        <p className="signup-footer">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
