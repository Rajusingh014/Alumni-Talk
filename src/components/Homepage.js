// src/components/Homepage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/alumni")
      .then((response) => setTalks(response.data.slice(0, 3))) // show only latest 3
      .catch((error) => console.error("Error fetching talks:", error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-4 text-primary fw-bold">Welcome to Alumni Talk</h1>
        <p className="lead text-muted">
          A platform to connect alumni and freshers, share experiences, and inspire each other.
        </p>
        <div className="mt-4">
          <Link to="/register/alumni" className="btn btn-primary mx-2 px-4">
            Alumni Register
          </Link>
          <Link to="/register/fresher" className="btn btn-success mx-2 px-4">
            Fresher Register
          </Link>
          {/* Login button removed from homepage */}
        </div>
      </section>

      {/* Latest Talks Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Latest Alumni Talks</h2>
        {talks.length === 0 ? (
          <p className="text-muted text-center">No talks available</p>
        ) : (
          <div className="row">
            {talks.map((talk, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {talk.name} ({talk.role})
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {talk.branch} | {talk.year}
                    </h6>
                    <p className="card-text">{talk.talk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-3">
          <Link to="/all-talks" className="btn btn-outline-primary">
            View All Talks
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
