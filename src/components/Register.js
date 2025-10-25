// Register.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const location = useLocation();
  const roleFromState = location.state?.role || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
    role: roleFromState
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Register as {formData.role}</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <br /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <br /><br />
      <select name="branch" onChange={handleChange} required>
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="MECH">MECH</option>
        {/* Add more branches if needed */}
      </select>
      <br /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
