import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConcertInfoPage from './Pages/ConcertInfoPage';
import LoadingPage from './Pages/LoadingPage';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Common/NavBar'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/concert-info" element={<ConcertInfoPage />} />
        <Route path="/loading" element={<LoadingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;