import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConcertInfoPage from './Pages/ConcertInfoPage';
import LoadingPage from './Pages/LoadingPage';
import LandingPage from './Pages/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/concert-info" element={<ConcertInfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;