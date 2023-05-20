import React, { useState } from "react";
import { Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyleData } from "../../context/StyleProvider";

const NavButtons = ({responsiveClass}) => {
  const { LoginButton, NavButtonBoxStyled, HtmlTooltip } = useStyleData();
  const [tooltipOpen,setTooltipOpen] = useState(false)
  return (
    <NavButtonBoxStyled 
    className={responsiveClass}
    >
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
        onClick={()=>setTooltipOpen(!tooltipOpen)}
        >Login</LoginButton>

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
  );
};

export default NavButtons;
