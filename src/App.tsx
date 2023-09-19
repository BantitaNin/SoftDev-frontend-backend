import React from 'react';
import ConcertInfoPage from './Pages/ConcertInfoPage';
import LoadingPage from './Pages/LoadingPage';
import Navbar from './Components/Common/NavBar';

const App = () => {
  return (
    <div>
      {/* <ConcertInfoPage /> */}
      <Navbar/>
      <LoadingPage />
    </div>
  );
};

export default App;