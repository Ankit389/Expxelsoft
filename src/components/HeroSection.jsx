import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>The largest community of photo enthusiasts</h1>
      <div style={styles.avatars}>
        {/* Example of passing different avatar URLs */}
        
        {/* Add more Avatar components as needed */}
      </div>
      <button style={styles.joinBtn}>Join Today</button>
    </section>
  );
};

// Avatar component with fallback to a placeholder image if imageUrl is not provided
const Avatar = ({ name, imageUrl }) => {
  return (
    <div style={styles.avatar}>
      <img
        src={imageUrl || "/avatar_placeholder.png"} // Fallback to placeholder
        alt={name}
        style={styles.avatarImage}
      />
      <p style={styles.avatarName}>{name}</p>
    </div>
  );
};

// Styles for the HeroSection and Avatar components
const styles = {
  hero: {
    position: 'relative',
    textAlign: 'center',
    height: '100vh', // Full height of the viewport
    width: '100vw',  // Full width of the viewport
    backgroundImage: 'url("avatar_placeholder.png")', // Path to the background image
    backgroundSize: 'cover', // Make sure the image covers the full area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  avatars: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  avatarName: {
    marginTop: '10px',
    fontSize: '0.9rem',
  },
  joinBtn: {
    padding: '10px 30px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
  },
};

export default HeroSection;
