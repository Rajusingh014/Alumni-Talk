 import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      marginTop: '2rem',
      backgroundColor: '#f1f1f1',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Alumni Talk. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

