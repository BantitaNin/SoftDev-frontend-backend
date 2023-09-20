import PropTypes from "prop-types";
import React from "react";
import "./ModalCSS/TopupModal.css";

interface Props {
  iconClose: string;
  iconKeyboardArrow: string;
}

export const TopupModal = ({
  iconClose = "icon-close.png",
  iconKeyboardArrow = "icon-keyboard-arrow-down.png",
}: Props): JSX.Element => {
  return (
    <div className="topup-modal">
      <div className="overlap">
        <div className="frame">
          <img className="icon-close" alt="Icon close" src={iconClose} />
          <div className="div">
            <div className="frame-2">
              <div className="text-wrapper">ยอดเงินในบัญชี SafeTicket</div>
              <div className="text-wrapper-2">250.00 ₿</div>
            </div>
            <hr className="line"/>
            <div className="frame-3">
              <div className="text-wrapper-3">เติมเงินจำนวน</div>
              <div className="group">
                <div className="overlap-group">
                  <div className="frame-4">
                    <div className="text-wrapper-4">top-up amount</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">ช่องทางการเติมเงิน</div>
              <div className="group">
                <div className="overlap-group">
                  <div className="frame-4">
                    <div className="text-wrapper-6">custom top-up method</div>
                    <img className="icon-keyboard-arrow" alt="Icon keyboard arrow" src={iconKeyboardArrow} />
                  </div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="text-wrapper-7">เติมเงิน</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TopupModal.propTypes = {
  iconClose: PropTypes.string,
  line: PropTypes.string,
  iconKeyboardArrow: PropTypes.string,
};