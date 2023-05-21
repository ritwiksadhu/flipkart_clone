import { Box, Button, FormControl, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";


const LogInPage = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail));
  };
  
  const validateEmail = (email) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswords = () => {
    return passwordRef.current.value === passwordConfirmRef.current.value;
  };
  
  const handlePasswordChange = () => {
  setPasswordError(!validatePasswords());
};

const handleConfirmPasswordChange = () => {
  setPasswordError(!validatePasswords());
};
  

  return (
    // outer box
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* wrapper box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          height: "400px",
          width: "500px",
        }}
      >
        {/* left */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "50%",
            backgroundColor: blue[600],
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              margin: "1rem",
            }}
          >
            Login
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              margin: "1rem",
            }}
          >
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
            alt=""
          />
        </Box>
        {/* right */}
        <Box
        sx={{
          width:"50%",
          height:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          padding:"1rem"
        }}
        
        >

        <FormControl
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "70%",
            width: "100%",
            marginBottom:"1rem",
          }}
        >

          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="current-password"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? 'Invalid email format' : ''}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            inputRef={passwordRef}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? 'Passwords do not match' : ''}            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            inputRef={passwordConfirmRef}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
          />
          <Button style={{
            border:"1px solid rgb(210,210,210)",
            background:"#fb641b",
            color:'white'
          }} type="submit">Log in</Button>
        </FormControl>
        <Link to={"/signup"}
        style={{
          textDecoration:"none",
          color:blue[600]
        }}
        >New user? Sign Up</Link>
                  <Link
            to={"/forgotpassword"}
            style={{
              textDecoration: "none",
              color: blue[600],
              marginTop:"1rem"
            }}
          >
            Forgot password?
          </Link>
        </Box>


      </Box>
    </Box>
  );
};

export default LogInPage;
