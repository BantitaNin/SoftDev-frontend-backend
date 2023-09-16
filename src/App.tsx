import React from 'react';
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