// src/components/ShareTalk.jsx
import React, { useState } from "react";
import axios from "axios";

const ShareTalk = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [talk, setTalk] = useState("");
  const [role, setRole] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select Alumni or Fresher before submitting.");
      return;
    }

    axios
      .post("/api/alumni", { name, year, talk, role, branch })
      .then(() => {
        alert("Your talk has been submitted successfully!");
        setName("");
        setYear("");
        setTalk("");
        setRole("");
        setBranch("");
      })
      .catch((error) => {
        console.error("Error submitting talk:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Share Your Talk</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        
        {/* Role Selection */}
        <div className="mb-3">
          <label className="form-label fw-bold">I am:</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Alumni">Alumni</option>
            <option value="Fresher">Fresher</option>
          </select>
        </div>

        {/* Branch Selection */}
        <div className="mb-3">
          <label className="form-label fw-bold">Branch:</label>
          <select
            className="form-select"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
          </select>
        </div>

        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Year */}
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        {/* Talk */}
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Talk"
            value={talk}
            onChange={(e) => setTalk(e.target.value)}
            required
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit Talk
        </button>
      </form>
    </div>
  );
};

export default ShareTalk;
