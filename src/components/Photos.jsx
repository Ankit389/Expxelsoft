import React from 'react';
import './Photos.css'; // Import the CSS file

const Photos = () => {
  return (
    <div className="container">
      {/* Move title at the top */}
      <h1 className="title">Snap photos and share like </h1>
      <h2 className="title">never before</h2>

      {/* A single div containing all the cards */}
      <div className="cards-wrapper">
        <div className="card">
          <h2 className="card-title">Sed ut perspiciatis</h2>
          <p className="card-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <button className="btn">Learn more</button>
        </div>

        <div className="card">
          <h2 className="card-title">Nemo enim ipsam</h2>
          <p className="card-text">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <button className="btn">Learn more</button>
        </div>

        <div className="card">
          <h2 className="card-title">Lorem ipsum dolor</h2>
          <p className="card-text">
            Amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <button className="btn">Learn more</button>
        </div>

        <div className="card">
          <h2 className="card-title">Tempora incidunt</h2>
          <p className="card-text">
            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Photos;
