import React, { useRef, useState, useEffect } from 'react';
import './CubeLanding.css'; 

const CubeLanding = ({ images, link }) => {
  const cubeRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    const handleMouseLeave = () => {
      setMouseX(window.innerWidth / 2);
      setMouseY(window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCubeClick = () => {
    setIsFlipped(true);
    setTimeout(() => {  // Small delay to allow flip animation to complete
      window.open(link, '_blank'); // Open link in new tab
    }, 500); // Adjust delay as needed
  };

  const calculateRotation = () => {
    if (!cubeRef.current) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const diffX = (mouseX - centerX) / 10; // Adjust divisor for sensitivity
    const diffY = (mouseY - centerY) /10; // Adjust divisor for sensitivity

    const rotateX = Math.max(-150, Math.min(150, diffY)); // Limit rotation
    const rotateY = Math.max(-150, Math.min(150, diffX)); // Limit rotation

    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div className="cube-container">
      <div
        className={`cube ${isFlipped ? 'flipped' : ''}`}
        ref={cubeRef}
        style={{ transform: calculateRotation() }}
        onClick={handleCubeClick}
      >
        {/* Front Face */}
        <div className="face front">
          <img src={images[0]} alt="Image 1" />
        </div>
        {/* Back Face */}
        <div className="face back">
          <img src={images[1]} alt="Image 2" />
        </div>
        {/* Right Face */}
        <div className="face right">
          <img src={images[2]} alt="Image 3" />
        </div>
        {/* Left Face */}
        <div className="face left">
          <img src={images[3]} alt="Image 4" />
        </div>
        {/* Top Face */}
        <div className="face top">
          <img src={images[4]} alt="Image 5" />
        </div>
        {/* Bottom Face */}
        <div className="face bottom">
          <img src={images[5]} alt="Image 6" />
        </div>
      </div>
    </div>
  );
};

export default CubeLanding;


