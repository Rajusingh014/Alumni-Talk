import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate('/register', { state: { role } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h2>Select Your Role</h2>

      <button
        onClick={() => handleSelect('Alumni')}
        style={{
          padding: '15px 30px',
          margin: '20px',
          fontSize: '18px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Login/Register as Alumni
      </button>

      <button
        onClick={() => handleSelect('Fresher')}
        style={{
          padding: '15px 30px',
          margin: '20px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Login/Register as Fresher
      </button>
    </div>
  );
};

export default RoleSelection;
