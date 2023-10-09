import React, { useState, useEffect } from 'react';
// import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';
import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';
import '../Components/CSS/LoadingPage.css';
import GetTicketComponent from '../Components/LoadingComponent/GetTicketComponent';
import FailTicketComponent from '../Components/LoadingComponent/FailTicketComponent';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div>
        <div className="LoadingPage">
        <LoadingComponent isLoading={isLoading} />
        {/* <GetTicketComponent isLoading={!isLoading} /> */}
        <FailTicketComponent isLoading={!isLoading} />
        </div>
    </div>
  );
};

export default LoadingPage;
