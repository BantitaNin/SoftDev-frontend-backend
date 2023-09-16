<<<<<<< HEAD
// src/Components/Common/NavBar.tsx

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const appBarStyle: React.CSSProperties = {
    backgroundColor: 'white',
    height: '40px',
  };

  const svgStyle: React.CSSProperties = {
    marginBottom: '25px',
  };
  const loginButtonStyle: React.CSSProperties = {

    borderRadius: '50px',
    background: '#000',
    width: '94px',
    height: '32px',
    marginBottom: '25px',
    color: '#FFF',
    textAlign: 'center', // Enclose property name in quotes
    fontFamily: 'Inter', // Enclose property name in quotes
    fontSize: '12px',
    fontStyle: 'normal', // Enclose property value in quotes
    fontWeight: '700',
    lineHeight: 'normal'  // Enclose property value in quotes
  };
  const iconStyle: React.CSSProperties = {

    marginBottom: '25px',

  };
  const Groupstyle: React.CSSProperties = {

    marginLeft: 'auto',

  };

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    zIndex: 999, // Ensure the modal is on top of other content
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px', // Adjust the padding as needed
    borderRadius: '8px', // Rounded corners for the container
    width: '400px',
    height: '300px',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', 
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a shadow for depth
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const modalinfo: React.CSSProperties = {
    
    height: '247px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    flexShrink: 0,
  };
  const contentstyle: React.CSSProperties = {
    alignItems: 'center',
    marginLeft: '40px',
    justifyContent: 'center',
  };


  return (<>
    <AppBar position="static" style={appBarStyle}>

      <Toolbar>

        <IconButton edge="start" color="inherit">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" style={svgStyle}>
            <path d="M13.3335 25.3333V18.6666H18.6668V25.3333C18.6668 26.0666 19.2668 26.6666 20.0001 26.6666H24.0001C24.7335 26.6666 25.3335 26.0666 25.3335 25.3333V16H27.6001C28.2135 16 28.5068 15.24 28.0401 14.84L16.8935 4.79996C16.3868 4.34663 15.6135 4.34663 15.1068 4.79996L3.96013 14.84C3.5068 15.24 3.7868 16 4.40013 16H6.6668V25.3333C6.6668 26.0666 7.2668 26.6666 8.00013 26.6666H12.0001C12.7335 26.6666 13.3335 26.0666 13.3335 25.3333Z" fill="black" />
          </svg>
        </IconButton>
        <div style={Groupstyle}>
        {isLoggedIn ? (
            /* When logged in, display these icons */
            <>
              <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M39.5 10.4933V7.83333C39.5 6.55 38.45 5.5 37.1667 5.5H20.8333C19.5383 5.5 18.5 6.55 18.5 7.83333V24.1667C18.5 25.45 19.5383 26.5 20.8333 26.5H37.1667C38.45 26.5 39.5 25.45 39.5 24.1667V21.5067C40.1883 21.0983 40.6667 20.3633 40.6667 19.5V12.5C40.6667 11.6367 40.1883 10.9017 39.5 10.4933ZM38.3333 12.5V19.5H30.1667V12.5H38.3333ZM20.8333 24.1667V7.83333H37.1667V10.1667H30.1667C28.8833 10.1667 27.8333 11.2167 27.8333 12.5V19.5C27.8333 20.7833 28.8833 21.8333 30.1667 21.8333H37.1667V24.1667H20.8333Z" fill="black"/>
            <path d="M33.667 17.75C34.6335 17.75 35.417 16.9665 35.417 16C35.417 15.0335 34.6335 14.25 33.667 14.25C32.7005 14.25 31.917 15.0335 31.917 16C31.917 16.9665 32.7005 17.75 33.667 17.75Z" fill="black"/>
          </svg>
          </IconButton>
          <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M33.142 17.1667C34.017 17.1667 34.787 16.6884 35.1837 15.965L39.3603 8.39337C39.792 7.62337 39.232 6.66671 38.3453 6.66671H21.0787L19.982 4.33337H16.167V6.66671H18.5003L22.7003 15.5217L21.1253 18.3684C20.2737 19.9317 21.3937 21.8334 23.167 21.8334H37.167V19.5H23.167L24.4503 17.1667H33.142ZM22.187 9.00004H36.362L33.142 14.8334H24.952L22.187 9.00004ZM23.167 23C21.8837 23 20.8453 24.05 20.8453 25.3334C20.8453 26.6167 21.8837 27.6667 23.167 27.6667C24.4503 27.6667 25.5003 26.6167 25.5003 25.3334C25.5003 24.05 24.4503 23 23.167 23ZM34.8337 23C33.5503 23 32.512 24.05 32.512 25.3334C32.512 26.6167 33.5503 27.6667 34.8337 27.6667C36.117 27.6667 37.167 26.6167 37.167 25.3334C37.167 24.05 36.117 23 34.8337 23Z" fill="black"/>
          </svg>
          </IconButton>
          <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M29.0003 27.6666C30.2837 27.6666 31.3337 26.6166 31.3337 25.3333H26.667C26.667 26.6166 27.717 27.6666 29.0003 27.6666ZM36.0003 20.6666V14.8333C36.0003 11.2516 34.0987 8.25329 30.7503 7.45996V6.66663C30.7503 5.69829 29.9687 4.91663 29.0003 4.91663C28.032 4.91663 27.2503 5.69829 27.2503 6.66663V7.45996C23.9137 8.25329 22.0003 11.24 22.0003 14.8333V20.6666L19.667 23V24.1666H38.3337V23L36.0003 20.6666ZM33.667 21.8333H24.3337V14.8333C24.3337 11.94 26.0953 9.58329 29.0003 9.58329C31.9053 9.58329 33.667 11.94 33.667 14.8333V21.8333Z" fill="black"/>
          </svg>
          </IconButton>
              <IconButton style={loginButtonStyle} onClick={handleLogout}>
                <Typography>Logout</Typography>
              </IconButton>
            </>
          ) : (
            <> <IconButton style={loginButtonStyle} onClick={handleLoginClickOpen} >
            <Typography>Login</Typography>
          </IconButton>

           <IconButton style={iconStyle} >
           <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
             <rect width="57" height="32" rx="16" fill="#EEEEEE" />
             <path d="M19.125 22.75H37.875V20.6667H19.125V22.75ZM19.125 17.5417H37.875V15.4583H19.125V17.5417ZM19.125 10.25V12.3333H37.875V10.25H19.125Z" fill="black" />
           </svg>
         </IconButton></>
            /* When not logged in, display the "Login" button */
           
          )}
          </div>
       { /*  <div style={Groupstyle}>

        <IconButton style={loginButtonStyle} onClick={handleLoginClickOpen} >
            <Typography>Login</Typography>
          </IconButton>
          <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M39.5 10.4933V7.83333C39.5 6.55 38.45 5.5 37.1667 5.5H20.8333C19.5383 5.5 18.5 6.55 18.5 7.83333V24.1667C18.5 25.45 19.5383 26.5 20.8333 26.5H37.1667C38.45 26.5 39.5 25.45 39.5 24.1667V21.5067C40.1883 21.0983 40.6667 20.3633 40.6667 19.5V12.5C40.6667 11.6367 40.1883 10.9017 39.5 10.4933ZM38.3333 12.5V19.5H30.1667V12.5H38.3333ZM20.8333 24.1667V7.83333H37.1667V10.1667H30.1667C28.8833 10.1667 27.8333 11.2167 27.8333 12.5V19.5C27.8333 20.7833 28.8833 21.8333 30.1667 21.8333H37.1667V24.1667H20.8333Z" fill="black"/>
            <path d="M33.667 17.75C34.6335 17.75 35.417 16.9665 35.417 16C35.417 15.0335 34.6335 14.25 33.667 14.25C32.7005 14.25 31.917 15.0335 31.917 16C31.917 16.9665 32.7005 17.75 33.667 17.75Z" fill="black"/>
          </svg>
          </IconButton>
          <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M33.142 17.1667C34.017 17.1667 34.787 16.6884 35.1837 15.965L39.3603 8.39337C39.792 7.62337 39.232 6.66671 38.3453 6.66671H21.0787L19.982 4.33337H16.167V6.66671H18.5003L22.7003 15.5217L21.1253 18.3684C20.2737 19.9317 21.3937 21.8334 23.167 21.8334H37.167V19.5H23.167L24.4503 17.1667H33.142ZM22.187 9.00004H36.362L33.142 14.8334H24.952L22.187 9.00004ZM23.167 23C21.8837 23 20.8453 24.05 20.8453 25.3334C20.8453 26.6167 21.8837 27.6667 23.167 27.6667C24.4503 27.6667 25.5003 26.6167 25.5003 25.3334C25.5003 24.05 24.4503 23 23.167 23ZM34.8337 23C33.5503 23 32.512 24.05 32.512 25.3334C32.512 26.6167 33.5503 27.6667 34.8337 27.6667C36.117 27.6667 37.167 26.6167 37.167 25.3334C37.167 24.05 36.117 23 34.8337 23Z" fill="black"/>
          </svg>
          </IconButton>
          <IconButton style={iconStyle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
            <rect width="57" height="32" rx="16" fill="#EEEEEE"/>
            <path d="M29.0003 27.6666C30.2837 27.6666 31.3337 26.6166 31.3337 25.3333H26.667C26.667 26.6166 27.717 27.6666 29.0003 27.6666ZM36.0003 20.6666V14.8333C36.0003 11.2516 34.0987 8.25329 30.7503 7.45996V6.66663C30.7503 5.69829 29.9687 4.91663 29.0003 4.91663C28.032 4.91663 27.2503 5.69829 27.2503 6.66663V7.45996C23.9137 8.25329 22.0003 11.24 22.0003 14.8333V20.6666L19.667 23V24.1666H38.3337V23L36.0003 20.6666ZM33.667 21.8333H24.3337V14.8333C24.3337 11.94 26.0953 9.58329 29.0003 9.58329C31.9053 9.58329 33.667 11.94 33.667 14.8333V21.8333Z" fill="black"/>
          </svg>
          </IconButton>
          <IconButton style={iconStyle} >
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="32" viewBox="0 0 57 32" fill="none">
              <rect width="57" height="32" rx="16" fill="#EEEEEE" />
              <path d="M19.125 22.75H37.875V20.6667H19.125V22.75ZM19.125 17.5417H37.875V15.4583H19.125V17.5417ZM19.125 10.25V12.3333H37.875V10.25H19.125Z" fill="black" />
            </svg>
          </IconButton>
  </div>*/}

      </Toolbar>
    </AppBar>
    {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
           <div style={modalinfo}>  
           <div onClick={handleModalClose} style={{display: 'flex', justifyContent: 'end'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M18.3 6.20997C17.91 5.81997 17.28 5.81997 16.89 6.20997L12 11.09L7.10997 6.19997C6.71997 5.80997 6.08997 5.80997 5.69997 6.19997C5.30997 6.58997 5.30997 7.21997 5.69997 7.60997L10.59 12.5L5.69997 17.39C5.30997 17.78 5.30997 18.41 5.69997 18.8C6.08997 19.19 6.71997 19.19 7.10997 18.8L12 13.91L16.89 18.8C17.28 19.19 17.91 19.19 18.3 18.8C18.69 18.41 18.69 17.78 18.3 17.39L13.41 12.5L18.3 7.60997C18.68 7.22997 18.68 6.58997 18.3 6.20997Z" fill="black"/>
</svg></div>
                <Typography fontWeight={'bold'} fontSize={'24px'} fontFamily={'Inter'} marginLeft={'25px'}>Login</Typography>
                <Typography fontWeight={'bold'} fontSize={'14px'} marginLeft={'25px'}>Enter your email and password</Typography>
                
                      <div style={contentstyle}> 
                            <Typography  fontSize={'20px'} fontWeight={'bold'} marginTop={'15px'}> Email </Typography>
                            <input type="text" style={{ width: '296px', marginTop:'5px', height:'25px', borderRadius:'8px'}} />
                            <Typography  fontSize={'20px'} fontWeight={'bold'} marginTop={'10px'}> Password </Typography>
                            <input type="text" style={{ width: '296px', marginTop:'5px',height:'25px', borderRadius:'8px'}} />
                            <button onClick={handleLogin} style={{backgroundColor:'black',width: '306px', borderRadius: '8px', marginTop:'20px',height:'35px', color:'white',  }}>Login</button>
                      </div>
              
            </div>
              {/* Your modal content (e.g., login form) goes here */}
            
           
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
=======
export {}
>>>>>>> origin/sprint1
