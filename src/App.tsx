import React from 'react';
import ConcertInfoPage from './Pages/ConcertInfoPage';
import LoadingPage from './Pages/LoadingPage';
import Navbar from './Components/Common/NavBar';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Common/NavBar'
const App = () => {
  return (
    <div>
    <Navbar/>
      <LandingPage /> {/* Include the LandingPage component */}

    </div>
  );
};

export default App;