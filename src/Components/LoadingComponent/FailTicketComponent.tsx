import React from 'react';
import SadeSVG from '../SVG/SadVector.svg';

import './FailTicketComponent.css';

interface LoadingComponentProps {
  isLoading: boolean;
}

const FailTicketComponent: React.FC<LoadingComponentProps> = ({ isLoading }) => {
  return (
    <div style={{ display: isLoading ? 'block' : 'none' }}>
      <div className='ticketQueue'>
        <div className='modalLayout'>

          <div className='failTicket'>
            <img src={SadeSVG} alt='Smile SVG' />
            <h2>เสียใจด้วย บัตรหมดแล้ว</h2>
            <button className='button-home'>
                <div className='button-home__text'>
                กลับไปหน้าหลัก
                </div>
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default FailTicketComponent;
