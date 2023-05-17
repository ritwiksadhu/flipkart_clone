import React, { useState } from "react";
import { Box, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyleData } from "../../context/StyleProvider";

const NavButtons = () => {
  const { LoginButton, NavButtonBoxStyled, HtmlTooltip } = useStyleData();
  const [tooltipOpen,setTooltipOpen] = useState(false)

  return (
    <NavButtonBoxStyled>
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
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
          </Box>
        }
        arrow
        open={tooltipOpen}
        onBlur={()=>setTooltipOpen(false)}
      >
        <LoginButton
        onClick={()=>setTooltipOpen(!tooltipOpen)}
        >Login</LoginButton>
      </HtmlTooltip>
      <Button
        disabled
        style={{
          background: "transparent",
          whiteSpace: "nowrap",
          textTransform: "capitalize",
          color: "#fff",
        }}
      >
        Become a Seller
      </Button>
      <Button
        sx={{
          color: "white",
          textTransform: "capitalize",
        }}
      >
        More
      </Button>
      {/* PUT THE LOGIC FOR THE BADGE NOTIFICATION */}
      <Button style={{ color: "white", textTransform: "capitalize" }}>
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
