import PropTypes from "prop-types";
import React, { useState } from 'react';
import "./ModalCSS/BalanceModal.css";
import { TopupModal } from "./TopupModal";
import { PayoutModal } from "./PayoutModal";
interface Props {
  iconClose: string;
  

}

export const BalanceModal = ({ iconClose = "Pics/icon-close.svg",  }: Props): JSX.Element => {
  const [isTopupModalclick, setisTopupModalclick] = useState(false);
  const [isPayoutModalclick, setPayoutModalclick] = useState(false);
  const handleTopup = () =>{
    setisTopupModalclick(!isTopupModalclick);
  }
  const handlePayout = () =>{
    setPayoutModalclick(!isPayoutModalclick);
  }
  return (
   
     <> <div className="balance-modal">
     <div className="overlap-group">
       <div className="frame">
         <img className="icon-close" alt="Icon close" src={iconClose}  />
         <div className="div">
           <div className="frame-2">
             <div className="text-wrapper">ยอดเงินในบัญชี SafeTicket</div>
             <div className="text-wrapper-2">250.00 ₿</div>
           </div>
           <div className="frame-3">
             <button className="button" onClick={handleTopup}>
               <div className="text-wrapper-3">เติมเงิน</div>
             </button>
             <button className="div-wrapper" onClick={handlePayout}>
               <div className="text-wrapper-3">ถอนเงิน</div>
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
   {isTopupModalclick &&(
    <TopupModal iconClose = "icon-close.png"
    iconKeyboardArrow = "icon-keyboard-arrow-down.png"/>
   )}  {isPayoutModalclick &&(
    <PayoutModal iconClose = "icon-close.png"
    iconKeyboardArrow = "icon-keyboard-arrow-down.png"/>
   )}
   </>
  );
};

BalanceModal.propTypes = {
  iconClose: PropTypes.string,
};