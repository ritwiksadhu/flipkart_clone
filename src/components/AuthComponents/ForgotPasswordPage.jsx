import { Alert, AlertTitle, Box, Button, FormControl } from "@mui/material";
import React, {useState } from "react";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [successMsg,setSuccessMsg] = useState(false)
  const [errorMsg,setErrorMsg] = useState(false)

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

  async function handleSubmit(e){
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setSuccessMsg(true)
    })
    .catch((error) => {
      setErrorMsg(false)
    });
  }

  return (
    // outer box
    <Box style={{
      display: "grid",
      placeContent: "center",
      height: "100vh",
      width: "100vw",
    }}
    >
      <Box
      style={{
        height:"3rem"
      }}
      >
    {successMsg && <Alert severity="success">
        <AlertTitle>Password Reset Link Sent Successfully </AlertTitle>
      </Alert>
      }
    {errorMsg && <Alert severity="error">
        <AlertTitle>please check your email and try again </AlertTitle>
      </Alert>
      }
      </Box>

          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "70%",
              width: "360px",
              marginBottom: "1rem",
              borderBottom: "1px solid rgb(210,210,210)",
            }}
            onSubmit={e=>handleSubmit(e)}
          >
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Invalid email format" : ""}
            />
            <Button
              style={{
                border: "1px solid rgb(210,210,210)",
                background: "#fb641b",
                color: "white",
                marginTop:"1rem"
              }}
              type="submit"
            >
              Reset Password
            </Button>
          </form>
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              color: blue[600],
            }}
          >
            Existing user? Log in
          </Link>
          <Link
            to={"/signup"}
            style={{
              textDecoration: "none",
              color: blue[600],
              marginTop:"1rem"
            }}
          >
            Dont have an account? sign up
          </Link>
        </Box>
  );
};

export default ForgotPasswordPage;
