import React from 'react';
// import LoadingSVG from '../SVG/LoadingVector.svg';
import SmileSVG from '../SVG/SmileVector.svg';

import './GetTicketComponent.css';

interface LoadingComponentProps {
  isLoading: boolean;
}

const GetTicketComponent: React.FC<LoadingComponentProps> = ({ isLoading }) => {
  return (
    <div style={{ display: isLoading ? 'block' : 'none' }}>
      <div className='ticketQueue'>
        <div className='modalLayout'>

          <div className='getTicket'>
            <img src={SmileSVG} alt='Smile SVG' />
            <h2>เย่! คุณได้บัตรแล้ว</h2>
            <h2>กรุณาเช็คที่กระเป๋า</h2>
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

export default GetTicketComponent;
