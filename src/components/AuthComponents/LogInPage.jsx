import { Alert, AlertTitle, Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useAuthData } from "../../context/AuthProvider";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const LogInPage = () => {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const {errorState,setErrorState} =  useAuthData()
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


  async function handleSubmit(e){
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, passwordRef.current.value)
    .then((userCredential) => {
      console.log("user logged in")
      setErrorState(false)
      navigate("/")
      
    })
    .catch((error) => {
      setErrorState(true)
    });
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
    <Box
      style={{
        height:"3rem"
      }}
      >
      {errorState && <Alert severity="error">
        <AlertTitle> Log in failed</AlertTitle>
      </Alert>}
      </Box>
        <form
        onSubmit={e=>handleSubmit(e)}
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "70%",
            width: "100%",
            marginTop:"2rem",
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
          />
          <Button style={{
            border:"1px solid rgb(210,210,210)",
            background:"#fb641b",
            color:'white'
          }} type="submit">Log in</Button>
        </form>
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
