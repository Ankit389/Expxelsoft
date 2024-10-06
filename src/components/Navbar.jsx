// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav style={styles.navbar}>
//       <div>
//         <img src="logo1.png" alt="Logo" style={styles.logoImage} /> {/* Rounded Logo Image */}
//       </div>
//       <div style={styles.hamburger} onClick={toggleMenu}>
//         ☰
//       </div>
//       <ul style={{ ...styles.navLinks, display: isOpen ? 'flex' : 'none' }}>
//         <li><a href="#features" style={styles.link}>Features</a></li>
//         <li><a href="#pricing" style={styles.link}>Pricing</a></li>
//         <li><a href="#community" style={styles.link}>Community</a></li>
//         <li><a href="#support" style={styles.link}>Support</a></li>
//       </ul>
//       <button style={styles.registerBtn}>Register</button>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: 'red',
//     borderBottom: '2px solid #eee',
//     position: 'relative',
//     zIndex: 10,
//   },
//   logoImage: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//   },
//   navLinks: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '20px',
//     alignItems: 'center',
//     margin: 0, // Ensure no margin to avoid collapsing
//     padding: 0, // Remove default padding
//   },
//   link: {
//     color: 'black', // Ensure link color contrasts with background
//     textDecoration: 'none',
//   },
//   hamburger: {
//     display: 'none', // Hide by default
//     fontSize: '2rem',
//     cursor: 'pointer',
//   },
//   registerBtn: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//   },
//   // Media queries for mobile responsiveness
//   '@media (max-width: 768px)': {
//     navbar: {
//       flexDirection: 'column',
//       alignItems: 'flex-start',
//     },
//     hamburger: {
//       display: 'block', // Show hamburger icon on mobile
//     },
//     navLinks: {
//       flexDirection: 'column',
//       width: '100%',
//       gap: '10px',
//       backgroundColor: '#fff',
//       position: 'absolute',
//       top: '60px',
//       left: 0,
//       padding: '10px',
//       border: '1px solid #eee',
//       zIndex: 5,
//     },
//     registerBtn: {
//       marginTop: '10px',
//     },
//   },
// };

// export default Navbar;

import React from 'react';
import './navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo1.png" alt="Logo" className="logo-image" /> {/* Use relative path from public folder */}
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <button className="sign-button">Register</button>
    </nav>
  );
}

export default Navbar;




