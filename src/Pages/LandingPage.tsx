import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const LandingPage: React.FC = () => {
  const Headdiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
    color: 'white',
    marginTop: '100px',
  };

  const Concertticketdiv: React.CSSProperties = {
    display: 'flex',
    width: '1040px',
    padding: '15px 0px',
    alignItems: 'center',
    gap: '10px',
    borderBottom: '1px solid #000',
  };

  const ConcertListdiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Change to column layout
    alignItems: 'center',     // Center items horizontally
    gap: '40px',
    marginBottom: '80px'
  };

  const ListRow: React.CSSProperties = {
    display: 'flex',
    gap: '40px',     
    marginTop: '80px',         // Adjust the gap between pictures
    flexWrap: 'wrap', // Wrap items to the next row
    justifyContent: 'center', // Center items horizontally

    width: '1300px',

    
  };
  const information: React.CSSProperties = {
    
    marginLeft: '25px',         // Adjust the gap between pictures
    flexWrap: 'wrap', // Wrap items to the next row
    justifyContent: 'center', // Center items horizontally
    width: '150px',
   

    
  };

  const Listpic: React.CSSProperties = {
    width: '230px',
    height: '350px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    flexShrink: 0,
    flexWrap: 'wrap', 
    overflow: 'hidden',
  };

  // Generate Listpic elements
  const listPics = Array.from({ length: 12 }, (_, index) => (
    <Link key={index} to="/concert-info"> {/* เปลี่ยนไปยังหน้า ConcertInfoPage */}
      <div key={index} style={Listpic}>
        <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="230" height="250s"></img>
        <div style={information}>
        <Typography color={'black'} fontWeight={'bold'}>Concert ticket</Typography>
        <Typography color={'black'} fontSize={'15px'}>Concert xhdius iosjidjsiodjsd </Typography>
        <Typography color={'black'} fontWeight={'bold'} fontSize={'12px'} marginTop={'5px'}>Concert ticket</Typography></div>
      </div>
    </Link>
  ));
  
  return (
    <>
      <div style={Headdiv}>
        <div style={Concertticketdiv}>
          <Typography color={'black'} fontWeight={'bold'}>Concert ticket</Typography>
        </div>
      </div>

      <div style={ConcertListdiv}>
        <div style={ListRow}>
          {listPics}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
