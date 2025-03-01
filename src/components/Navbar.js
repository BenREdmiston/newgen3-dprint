import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/companyprints">Company Prints</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/enquiry">Enquiry</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
