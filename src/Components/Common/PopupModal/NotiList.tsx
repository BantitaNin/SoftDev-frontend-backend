import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import IsAccept from './ืnotificationType/IsAccept';
import GetRequest from './ืnotificationType/GetRequest';
import { PayingModal } from './PayingModal';
const NotiList: React.FC = () => {
//    {/* User */}
//   const [isAcceptNoti, setisAcceptNoti] = useState(true);//worker is accept
//   const [isdeclineNoti, setisdeclineNoti] = useState(false);//woker is decline
//   const [isGotticket, setisGotticket] = useState(false);//user is got ticker
//   const [isGotticketFail, setisGotticketFail] = useState(false);//user fail to get ticket 
//    {/* Worker */}
//   const [isGotRequest, setisGotRequest] = useState(true); //got request from user
//   const [isGotMoney, setisGotMoney] = useState(false);//got money from user

//   {/*Action accept*/}
  const [isPaying, setisPaying] = useState(false);
  const handlePaying = () =>{
         setisPaying(!isPaying);
  }

  const containerStyle: React.CSSProperties = {
    display: 'flex',
  width: '348px',
  height: '148px',
  padding: '15px 0px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '10px',
  background: '#EDE7E3',
  margin: 'auto',
  marginTop: '25px', 
  marginBottom: '10px',
 
  };

  return (
     <>
     <IsAccept handlePaying={handlePaying} />
     <GetRequest/>
      {isPaying &&(
         <PayingModal iconClose = "icon-close.png"/>
      )}
     </>
  );
};

export default NotiList;