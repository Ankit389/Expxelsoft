import React from 'react';
import './Photomure.css'; // Ensure you import the CSS file

const Photomure = () => {
  return (
    <div className="photomure-container">
      {/* Title Section */}
      <h1 className="photomure-title">Make your photos more stylish</h1>
      <p className="photomure-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>

      {/* Cards Section */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <img src="avatar2_placeholder.png" alt="Avatar Placeholder" className="card-image" />
          <div className="card-content">
            <h3>Sed ut perspiciatis</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
          </div>
          <div className="floating-avatar">
  
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="avatar3_placeholder.png" alt="Avatar Placeholder" className="card-image" />
          <div className="card-content">
            <h3>Lorem ipsum dolor</h3>
            <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="floating-avatar">
       
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="avatar4_placeholder.png" alt="Avatar Placeholder" className="card-image" />
          <div className="card-content">
            <h3>Nemo enim ipsam</h3>
            <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photomure;
