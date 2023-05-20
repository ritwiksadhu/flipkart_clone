import React, { useState } from "react";
import { Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyleData } from "../../context/StyleProvider";
import { useNavigate } from "react-router-dom";

const NavButtons = ({responsiveClass}) => {
  const { LoginButton, NavButtonBoxStyled, HtmlTooltip } = useStyleData();
  const [tooltipOpen,setTooltipOpen] = useState(false)
  const userLoggedIn = false
  
  const navigate = useNavigate()
  
  function logInBtnFunction(){
    userLoggedIn? setTooltipOpen(!tooltipOpen) : navigate("/login")
  
  }
  
  return (
    <>
    <NavButtonBoxStyled 
    className={responsiveClass}
    >
      {userLoggedIn}
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
            <Button>Sign out</Button>

          </Box>
        }
        arrow
        open={tooltipOpen}
        onBlur={()=>setTooltipOpen(false)}
      >
        <LoginButton
        className="loginBtn"
        onClick={logInBtnFunction}
        >
          {userLoggedIn? "My account" : "Log in"}

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
