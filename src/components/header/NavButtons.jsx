import React, { useState } from "react";
import { Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyleData } from "../../context/StyleProvider";
import { useNavigate } from "react-router-dom";
import { useAuthData } from "../../context/AuthProvider";

const NavButtons = ({responsiveClass}) => {
  const { LoginButton, NavButtonBoxStyled, HtmlTooltip } = useStyleData();
  const [tooltipOpen,setTooltipOpen] = useState(false)
  const {currentUser,signOutFunction} = useAuthData()
  
  const navigate = useNavigate()
  
  function logInBtnFunction(){
    currentUser? setTooltipOpen(!tooltipOpen) : navigate("/login")
  }

  function tooltipClose(){
    setTimeout(() => {
      setTooltipOpen(false)
    }, 300);
  }

  
  return (
    <>
    <NavButtonBoxStyled 
    className={responsiveClass}
    >
      {/* {userLoggedIn} */}
      <HtmlTooltip
        title={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2%",
            }}
          >
            {/* Buttons goes here */}
            <Button
            onClick={signOutFunction}
            >Sign out</Button>

          </Box>
        }
        arrow
        open={tooltipOpen}
        onBlur={tooltipClose}
      >
        <LoginButton
        className="loginBtn"
        onClick={logInBtnFunction}
        >
          {currentUser? "My account" : "Log in"}

        </LoginButton>

      </HtmlTooltip>
      <Button
        disabled
        style={{
          background: "transparent",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
        }}
      >
        Become a Seller
      </Button>
      <Button
        sx={{
          textTransform: "capitalize",
        }}
      >
        More
      </Button>
      {/* PUT THE LOGIC FOR THE BADGE NOTIFICATION */}
      <Button >
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
            },
          }}
          badgeContent={0}
          max={9}
        >
          <ShoppingCartIcon />
          <Box variant="span">Cart</Box>
        </Badge>
      </Button>
    </NavButtonBoxStyled>
    </>
  );
};

export default NavButtons;
