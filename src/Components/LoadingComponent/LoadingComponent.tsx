import React from 'react';
import LoadingSVG from '../SVG/LoadingVector.svg';

import './LoadingComponent.css';

interface LoadingComponentProps {
  isLoading: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ isLoading }) => {
  return (
    <div style={{ display: isLoading ? 'block' : 'none' }}>
      <div className='ticketQueue'>
        <div className='modalLayout'>
            
          <div className='waiting'>
            <img className='img-loading' src={LoadingSVG} alt='Loading SVG' />
            <h2>กรุณารอคิว</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
