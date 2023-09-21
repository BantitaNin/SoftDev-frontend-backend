import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
const NotiList: React.FC = () => {
    {/* User */}
  const [isAcceptNoti, setisAcceptNoti] = useState(false);
  const [isdeclineNoti, setisdeclineNoti] = useState(false);
  const [isGotticket, setisGotticket] = useState(false);
  const[isGotticketFail, setisGotticketFail] = useState(false);
   {/* Worker */}
  const [isGotRequest, setisGotRequest] = useState(false);
  const [isGotMoney, setisGotMoney] = useState(false);


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
     {isGotRequest && ( <div className="RequestBuyer" style={containerStyle}>
        <div  style={{margin:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography fontSize={'14px'}>รายละเอียด : บัตร XXYYZZ วันที่ DD/MM/YYYY</Typography>
        <Typography>Mrs.F ได้ส่งทำขอมาหาคุณ</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
        <IconButton style={{fontSize:'12px', backgroundColor: '#FFA62B', borderRadius: '5px' ,width: '135px',
height: '24px', color: 'white' }}>รับงาน</IconButton>
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px', color: 'white' }}>ปฏิเสธ</IconButton>
  </div>
        </div>
     </div>)
}
    
{isdeclineNoti && (
     <div className="decline" style={containerStyle}>
     <div  style={{marginRight:'auto', marginLeft: '20px', marginTop:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography>ได้ปฏิเสธคำร้องขอแล้ว</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', }}>
       
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px',color: 'white'}}>รับทราบ</IconButton>
  </div>
        </div>
     </div>
)}

{isGotMoney && (
     <div className="DepositSuccess" style={containerStyle}>
     <div  style={{marginRight:'auto', marginLeft: '20px', marginTop:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography>Mrs.F ได้ทำการโอนเงินเรียบร้อยแล้ว</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px',  }}>
        
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px', color: 'white' }}>รับทราบ</IconButton>
  </div>
        </div>
     </div>
      )}
      {isAcceptNoti && (
     <div className="BuyerAccept" style={containerStyle}>
     <div  style={{marginRight:'auto', marginLeft: '20px', marginTop:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography>Mr.A ได้ตอบรับแล้ว กรุณาชำระเงินค่ากดบัตร</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
        <IconButton style={{fontSize:'12px', backgroundColor: '#FFA62B', borderRadius: '5px' ,width: '135px',
height: '24px', color: 'white' }}>โอนเงิน</IconButton>
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px', color: 'white' }}>ปฏิเสธ</IconButton>
  </div>
        </div>
     </div>
        )}

{isGotticket && (
     <div className="GotTicket" style={containerStyle}>
     <div  style={{marginRight:'auto', marginLeft: '20px', marginTop:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography>Mr.C ได้กดบัตร xxx สำเร็จแล้วกรุณาเช็คที่ กระเป๋า</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px'  }}>
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px',color: 'white'}}>รับทราบ</IconButton>
  </div>
        </div>
     </div>
      )}
     {isGotticketFail && (
     <div className="TicketFail"style={containerStyle} >
     <div  style={{marginRight:'auto', marginLeft: '20px', marginTop:'auto'}}>
        <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
        <Typography>Mr.D กดบัตรไม่สำเร็จเสียใจด้วย</Typography>
        </div>
        <div id="block" style={{display: "colum",margin:'auto', justifyContent: 'space-between', gap:'20px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px',  }}>
        <IconButton style={{fontSize:'12px', backgroundColor: '#888', borderRadius: '5px' ,width: '135px',
height: '24px',color: 'white'}}>รับทราบ</IconButton>
  </div>
        </div>
     </div>
      )}
     </>
  );
};

export default NotiList;