import { Box, Button, FormControl, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import {auth } from "../../firebase/firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [disableSubmit,setDisableSubmit] = useState()
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail));
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswords = () => {
    if(passwordConfirmRef.current.value.length>=6 && passwordRef.current.value.length>= 6){
      return passwordRef.current.value === passwordConfirmRef.current.value;
    }
    else return false
  };
  
  const handlePasswordChange = () => {
  setPasswordError(!validatePasswords());
};

const handleConfirmPasswordChange = () => {
  setPasswordError(!validatePasswords());
};
  async function handleSubmit(e){
    e.preventDefault()
    setDisableSubmit(true)
    if(!passwordError && !emailError ){
      console.log("submitted")
      await createUserWithEmailAndPassword(auth,email,passwordRef.current.value)
      .then((userCredential) => {
        console.log("user created")
        navigate("/")
        setDisableSubmit()
    })
    .catch(() => {setDisableSubmit()});
    }

  }

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
          alignItems: "center",
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
            Sign up
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              margin: "1rem",
            }}
          >
            Sign up with your Email to get started{" "}
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

        <form
          action=""
          onSubmit={e=>handleSubmit(e)}
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
            label="Email"
            type="email"
            autoComplete="current-password"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? 'Invalid email format' : ''}
          />

          <TextField
            label="Password"
            type="password"
            inputRef={passwordRef}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? 'Passwords do not match' : ''}            autoComplete="current-password"
          />
          <TextField
            inputRef={passwordConfirmRef}
            onChange={handleConfirmPasswordChange}
            error={passwordError}
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
          />
          <Button 
          style={{
            border:"1px solid rgb(210,210,210)",
            background:"#fb641b",
            color:'white'
          }} 
          type="submit"
          disabled= {disableSubmit}
          >Log in</Button>
        </form>
        <Link to={"/login"}
        style={{
          textDecoration:"none",
          color:blue[600]
        }}
        >Already have an account? log in</Link>
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

export default SignUpPage;
