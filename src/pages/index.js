import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import CubeLanding from '../components/CubeLanding'; // Ensure correct import

const LandingPage = () => {
  const navigate = useNavigate();
  const imageURLs = [
    require('../images/GENimg.png'), // front face
    require('../images/3-Dimg.png'), // back face
    require('../images/3-Dimg.png'), // right face
    require('../images/NEWimg.png'), // left face
    require('../images/NEWimg.png'), // top face
    require('../images/3-Dimg.png'), // bottom face
  ];

  const handleCubeClick = () => {
    navigate('/main');
  };

  return (
    <div className='container'>
      <h1 className='titleheader'>NEWGEN3DPRINT</h1>
      <h2 className='subtitleheader'>INNOVATION LAYER BY LAYER</h2>
      <div className='content'>
        <CubeLanding images={imageURLs} link="/main" onClick={handleCubeClick} /> {/* Pass link prop */}
      </div>
    </div>
  );
};

export default LandingPage;
