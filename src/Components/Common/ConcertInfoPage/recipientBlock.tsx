import React, { Component } from 'react';
import "./CSS/recipientBlock.css"

interface State {
  isDisplayed: boolean;
}

class Info extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }

  toggleDisplay = () => {
    this.setState((prevState) => ({
      isDisplayed: !prevState.isDisplayed,
    }));
  };

  render() {
    const { isDisplayed } = this.state;

    return (
      <div>
        {isDisplayed && (
            <div className="container" id="person">
                <div className="left-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 2.625C7.72789 2.625 2.625 7.72789 2.625 14C2.625 20.2721 7.72789 25.375 14 25.375C20.2721 25.375 25.375 20.2721 25.375 14C25.375 7.72789 20.2721 2.625 14 2.625ZM11.2536 9.01359C11.9465 8.27914 12.9216 7.875 14 7.875C15.0784 7.875 16.0448 8.28188 16.7404 9.02016C17.4453 9.76828 17.7882 10.7734 17.7073 11.8541C17.5454 14 15.8829 15.75 14 15.75C12.1171 15.75 10.4513 14 10.2927 11.8535C10.2123 10.7641 10.5547 9.7557 11.2536 9.01359ZM14 23.625C12.7151 23.6258 11.4431 23.3687 10.2595 22.8687C9.07581 22.3688 8.00461 21.6362 7.10938 20.7145C7.6221 19.9833 8.2754 19.3617 9.03109 18.8858C10.4251 17.9922 12.1893 17.5 14 17.5C15.8107 17.5 17.5749 17.9922 18.9673 18.8858C19.7236 19.3614 20.3775 19.9831 20.8906 20.7145C19.9955 21.6363 18.9243 22.3689 17.7406 22.8689C16.5569 23.3689 15.2849 23.626 14 23.625Z" fill="black"/>
                  </svg>
                  <p id="reciText">สมหญิง บัตรสั่งได้</p>
                </div>
                <div className="right-content">
                <button type="button" id="btnReci">จ้าง</button>
            </div>
        </div>
        )}
      </div>
    );
  }
}

export default Info;