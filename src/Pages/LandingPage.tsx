import React from 'react';
import { BalanceModal } from '../Components/Common/PopupModal/BalanceModal'
import { TopupModal } from '../Components/Common/PopupModal/TopupModal'
import { PayoutModal } from '../Components/Common/PopupModal/PayoutModal';

const LandingPage = () => {
  return (
    <div>
      {/* Landing Page content */}
      <h1>this is naa web!!!!</h1>
      <BalanceModal iconClose="../Components/Common/PopupModal/Pics/icon_close.svg" />
      <br></br>
      <TopupModal
        iconClose="../PopupModal/Pics/icon_close.png"
        line="line-1.svg"
        iconKeyboardArrow="icon-keyboard-arrow-down.png"
      />
      <br></br>
      <PayoutModal
        iconClose="../PopupModal/Pics/icon_close.png"
        line="line-1.svg"
        iconKeyboardArrow="icon-keyboard-arrow-down.png"
      />

    </div>
  );
};

export default LandingPage;