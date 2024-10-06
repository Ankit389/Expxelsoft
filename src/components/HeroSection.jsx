import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>The largest community of photo enthusiasts</h1>
      <div style={styles.avatars}>
        {/* Example of passing different avatar URLs */}
     
        {/* Add more Avatar components as needed */}
      </div>
      <button style={styles.joinBtn}>Join Now</button>
    </section>
  );
};

// Avatar component with fallback to a placeholder image if imageUrl is not provided
const Avatar = ({ name, imageUrl }) => {
  return (
    <div style={styles.avatar}>
      <img
        src={imageUrl || "/placeholder.png"} // Fallback to placeholder
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
    backgroundImage: 'url("placeholder.png")', // Path to the background image
    backgroundSize: 'cover', // Make sure the image covers the full area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: '0 20px', // Added padding for smaller screens
  },
  heading: {
    fontSize: '2.5rem', // Adjusted for smaller screens
    marginBottom: '20px',
  },
  avatars: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Reduced gap for smaller screens
    marginBottom: '20px',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarImage: {
    width: '40px', // Reduced size
    height: '40px', // Reduced size
    borderRadius: '50%',
    border: '2px solid #fff',
  },
  avatarName: {
    marginTop: '10px',
    fontSize: '0.8rem', // Smaller font size
  },
  joinBtn: {
    padding: '10px 20px', // Adjusted padding
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem', // Smaller font size for button
    cursor: 'pointer', // Added cursor pointer for better UX
  },
};

// Media Queries for Responsive Design
const mediaQueries = {
  '@media (max-width: 768px)': {
    hero: {
      height: '80vh', // Adjust height for mobile
    },
    heading: {
      fontSize: '2rem', // Smaller heading font for mobile
    },
    joinBtn: {
      fontSize: '0.9rem', // Smaller button font for mobile
    },
    avatarImage: {
      width: '30px', // Further reduced avatar size for mobile
      height: '30px', // Further reduced avatar size for mobile
    },
    avatarName: {
      fontSize: '0.7rem', // Smaller avatar name font for mobile
    },
  },
};

export default HeroSection;
