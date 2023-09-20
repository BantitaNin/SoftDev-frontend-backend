import PropTypes from "prop-types";
import React from "react";
import "./ModalCSS/BalanceModal.css";

interface Props {
  iconClose: string;
}

export const BalanceModal = ({ iconClose = "icon-close.png" }: Props): JSX.Element => {
  return (
    <div className="balance-modal">
      <div className="overlap-group">
        <div className="frame">
          <img className="icon-close" alt="Icon close" src={iconClose} />
          <div className="div">
            <div className="frame-2">
              <div className="text-wrapper">ยอดเงินในบัญชี SafeTicket</div>
              <div className="text-wrapper-2">250.00 ₿</div>
            </div>
            <div className="frame-3">
              <button className="button">
                <div className="text-wrapper-3">เติมเงิน</div>
              </button>
              <button className="div-wrapper">
                <div className="text-wrapper-3">ถอนเงิน</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BalanceModal.propTypes = {
  iconClose: PropTypes.string,
};