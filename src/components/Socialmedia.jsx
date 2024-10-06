import React from 'react';
import './Socialmedia.css'; // Import the CSS file

const Socialmedia = () => {
  return (
    <div className="social-container">
      {/* Title and Subtitle */}
      <h1 className="main-title">Have you ever posted a photo on social media?</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      {/* Content Container */}
      <div className="content-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="text-block">
            <h2>Sed ut perspiciatis</h2>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          </div>
          <div className="text-block">
            <h2>Lorem ipsum dolor</h2>
            <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="text-block">
            <h2>Nemo enim ipsam</h2>
            <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <img src="avatar1_placeholder.png" alt="placeholder" className="right-image" />
          <div className="floating-avatars">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
