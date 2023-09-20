import React from 'react';
import { BalanceModal } from '../Components/Common/PopupModal/BalanceModal'
import { TopupModal } from '../Components/Common/PopupModal/TopupModal'
import { PayoutModal } from '../Components/Common/PopupModal/PayoutModal';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {/* Landing Page content */}
      <div>
        <h1>Pop Up Modal</h1>
        <BalanceModal iconClose="/Pics/icon_close.png" />
        <br/>
        <TopupModal
          iconClose="/Pics/icon_close.png"
          iconKeyboardArrow="/Pics/icon_keyboard_arrow_down.png"
        />
        <br/>
        <PayoutModal
          iconClose="/Pics/icon_close.png"
          iconKeyboardArrow="/Pics/icon_keyboard_arrow_down.png"
        />
        <br/>
      </div>
    </div>
  );
};

export default LandingPage;