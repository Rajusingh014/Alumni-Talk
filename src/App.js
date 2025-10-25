import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

// Newly added components
import AlumniRegister from "./components/AlumniRegister";
import FresherRegister from "./components/FresherRegister";
import Login from "./components/Login";
import ShareTalk from "./components/ShareTalk";   
import About from "./components/About";   // ✅ New import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        {/* (Optional: if you still want direct register pages) */}
        <Route path="/register/alumni" element={<AlumniRegister />} />
        <Route path="/register/fresher" element={<FresherRegister />} />

        {/* Extra feature */}
        <Route path="/share-talk" element={<ShareTalk />} />   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
