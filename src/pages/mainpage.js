import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import './mainpage.css';

const MainPage = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar component */}
      <div className="content">
        <h1>Welcome to NEWGEN3DPRINT</h1>
        <p>Select a section from the navbar to learn more.</p>
      </div>
    </div>
  );
};

export default MainPage;
