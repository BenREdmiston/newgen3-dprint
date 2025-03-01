import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './pages/index'; // Ensure correct import
import About from './pages/about';
import CompanyPrints from './pages/companyprints';
import Merch from './pages/merch';
import Enquiry from './pages/enquiry';
import MainPage from './pages/mainpage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Ensure correct component */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/companyprints" element={<CompanyPrints />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
};

export default App;
