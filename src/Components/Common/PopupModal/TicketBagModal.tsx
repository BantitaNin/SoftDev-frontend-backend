// src/Components/Common/LoginModal.tsx

import React from 'react';
import Typography from '@mui/material/Typography';

const TicketBagModal: React.FC<{

    handleModalClose: () => void;

}> = ({ handleModalClose }) => {
    const modalOverlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    };

    const modalContentStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        height: '350px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    };

    const modalinfo: React.CSSProperties = {
        height: '247px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        flexShrink: 0,
        
    };
    const ticketlist = Array.from({ length: 12 }, (_, index) => (
        <div key={index}  >
        <div id = "block" style={{marginTop: '10px',display: 'flex',height: '117px',padding: '7px 16px',justifyContent: 'center',alignItems: 'center',gap: '13px',alignSelf: 'stretch', borderRadius: '5px', border:'1px solid rgba(0, 0, 0, 0.25)', }}>
                    <div id="image"style={{width:'120px', height:'90px', borderRadius:'12px', background: '#FFA62B'}}></div>
                             <div id = "info" style={{margin: 'auto'}}> 
                                    <Typography fontSize={"24px"}>BTS concert Ticket</Typography>
                                    <Typography fontSize={"12px"}>จัดที่นั่นโน่นนี่,นี่โน่นนั่น</Typography>
                                    <Typography fontSize={"12px"}>วันที่ : DD / MM / YY</Typography>
                                    <Typography fontSize={"12px"}>ที่นั่ง : YY0011</Typography>
                             </div>
                    </div>
          
        </div>
      ));
   
    return (
        <> <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>
            <div style={modalinfo}>
            {/*navbar upper */}
          <div style={{borderBottom: '1px solid black', display:'flex', margin: 'auto', width: '400px'}}>
                <Typography fontWeight={'bold'} fontFamily={'Inter'} style={{ marginBottom: '10px' }}>จำนวนบัตร</Typography>
                <div style={{  marginLeft: 'auto'}}>
                    <svg onClick={handleModalClose} xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path d="M13.2997 1.20997C12.9097 0.819971 12.2797 0.819971 11.8897 1.20997L6.99973 6.08997L2.10973 1.19997C1.71973 0.809971 1.08973 0.809971 0.699727 1.19997C0.309727 1.58997 0.309727 2.21997 0.699727 2.60997L5.58973 7.49997L0.699727 12.39C0.309727 12.78 0.309727 13.41 0.699727 13.8C1.08973 14.19 1.71973 14.19 2.10973 13.8L6.99973 8.90997L11.8897 13.8C12.2797 14.19 12.9097 14.19 13.2997 13.8C13.6897 13.41 13.6897 12.78 13.2997 12.39L8.40973 7.49997L13.2997 2.60997C13.6797 2.22997 13.6797 1.58997 13.2997 1.20997Z" fill="black" />
                    </svg>
             
                 </div>
            </div>

            {/*ticket list*/}
                <div style={{width: '400px', maxHeight: '300px', overflowY: 'auto'}}>
                {ticketlist.length === 0 ? (
    <Typography style={{ textAlign: 'center', marginTop: '10px' }}>Empty</Typography>
  ) : (
    ticketlist
  )}            
                </div>
           
              
               

            </div>
        </div>
    </div>
</>
       
    );
};

export default TicketBagModal;
