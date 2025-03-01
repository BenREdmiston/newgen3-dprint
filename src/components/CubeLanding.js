import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CubeContainer = styled.div`
  width: 500px; /* Adjust size as needed */
  height: 500px; /* Adjust size as needed */
  perspective: 800px; /* Creates 3D space */
  position: relative; 
  display: flex;
  border: 20px solid #FCB97D; /* Add a border */
  background-color: #FCB97D; /* Add a background color */
  border-radius: 75px; /* Optional: round the corners */
  padding: 5px; /* Add some padding */ 
  margin: 5px; /* Add some margin */
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(-40deg) rotateX(-45deg);
  transform-style: preserve-3d; /* Important for 3D effect */
  transition: transform 0.1s ease; /* Smooth rotation */
  cursor: pointer;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* Center images horizontally */
  align-items: center; /* Center images vertically */
  backface-visibility: hidden; /* Hide the back of faces */
`;

const FaceImage = styled.img`
  max-width: 100%; /* Adjust image size */
  max-height: 100%; /* Adjust image size */
  margin: 5px; /* Add some space between images */
`;

const CubeLanding = ({ images, link }) => {
  const cubeRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const navigate = useNavigate(); // Add useNavigate hook

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
      navigate(link); // Use navigate instead of window.open
    }, 500); // Adjust delay as needed
  };

  const calculateRotation = () => {
    if (!cubeRef.current) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const diffX = (mouseX - centerX) / 10; // Adjust divisor for sensitivity
    const diffY = (mouseY - centerY) / 10; // Adjust divisor for sensitivity

    const rotateX = Math.max(-150, Math.min(150, diffY)); // Limit rotation
    const rotateY = Math.max(-150, Math.min(150, diffX)); // Limit rotation

    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <CubeContainer>
      <Cube
        className={isFlipped ? 'flipped' : ''}
        ref={cubeRef}
        style={{ transform: calculateRotation() }}
        onClick={handleCubeClick}
      >
        <Face style={{ transform: 'translateZ(100px)' }}>
          <FaceImage src={images[0]} alt="Image 1" />
        </Face>
        <Face style={{ transform: 'rotateY(180deg) translateZ(100px)' }}>
          <FaceImage src={images[1]} alt="Image 2" />
        </Face>
        <Face style={{ transform: 'rotateY(90deg) translateZ(100px)' }}>
          <FaceImage src={images[2]} alt="Image 3" />
        </Face>
        <Face style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}>
          <FaceImage src={images[3]} alt="Image 4" />
        </Face>
        <Face style={{ transform: 'rotateX(90deg) translateZ(100px)' }}>
          <FaceImage src={images[4]} alt="Image 5" />
        </Face>
        <Face style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}>
          <FaceImage src={images[5]} alt="Image 6" />
        </Face>
      </Cube>
    </CubeContainer>
  );
};

export default CubeLanding;
