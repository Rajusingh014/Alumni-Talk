import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUserId: "",
    password: "",
  });

  const [forgotEmail, setForgotEmail] = useState(""); // For forgot password
  const [showForgot, setShowForgot] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        login: formData.emailOrUserId,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email: forgotEmail });
      alert("Password reset link sent to your email!");
      setForgotEmail("");
      setShowForgot(false);
    } catch (err) {
      alert(err.response?.data?.msg || "Error sending reset link");
    }
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto shadow" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          {!showForgot ? (
            <>
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email or User ID</label>
                  <input
                    type="text"
                    name="emailOrUserId"
                    className="form-control"
                    placeholder="Enter email or user ID"
                    value={formData.emailOrUserId}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={() => setShowForgot(true)}>
                  Forgot Password?
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center mb-4">Reset Password</h2>
              <form onSubmit={handleForgotPassword}>
                <div className="mb-3">
                  <label className="form-label">Enter your email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-warning w-100">
                  Send Reset Link
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={() => setShowForgot(false)}>
                  Back to Login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
