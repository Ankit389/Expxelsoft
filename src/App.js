import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Photos from './components/Photos';
import Socialmedia from './components/Socialmedia';
import Photomure from './components/Photomure';
import Sign from './components/sign';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Photos/>
      <Socialmedia/>
      <Photomure/>
      <Sign/>
      <Footer/>
    </div>
  );
}

export default App;
