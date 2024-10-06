import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Photos from './components/Photos';
import Socialmedia from './components/Socialmedia';
import Photomure from './components/Photomure';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Photos/>
      <Socialmedia/>
      <Photomure/>
    </div>
  );
}

export default App;
