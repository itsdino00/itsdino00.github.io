import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'cream' }}>
      <p>&copy; {new Date().getFullYear()} Solana Tools. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
