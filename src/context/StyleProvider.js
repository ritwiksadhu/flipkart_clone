import React, { useContext, createContext } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/base";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { AppBar, IconButton, Typography } from "@mui/material";

const StyleData = createContext();

const useStyleData = () => {
  return useContext(StyleData);
};

const StyleProvider = ({ children }) => {
  const LoginButton = styled(Button)(({ theme }) => ({
    color: "#2874f0",
    background: "white",
    border: "1px solid #2874f0 ",
    borderRadius: "1px",
    fontSize: ".9rem",
    padding: ".2rem 2.5rem",
    textTransform: "capitalize",
    height:"2rem",
    cursor:"pointer",
    "&:hover": {
      color: "#fff",
      backgroundColor: blue[600],
      border: blue[600],
    },
  }));
  const NavButtonBoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-Between",
    alignItems: "center",
    width: "30%",
    marginLeft: "2%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const HtmlTooltip = styled(({ theme, className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
      "&::before": {
        backgroundColor: theme.palette.common.white,
      },
    },
  }));

  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: blue[600],
    height: "55px",
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    boxShadow: "none",
    width:"100%",
    border: "1px solid red",
    // margin: "0",
  }));

  const LogoBox = styled(Box)(({ theme }) => ({
    marginLeft: "12%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      // marginLeft:"5%"
    },
  }));

  const LogoBottom = styled(Typography)(() => ({
    fontSize: "10px",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const HamButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const ProductBoxWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    width: "1",
    height: "1",
    boxShadow: 1,
    padding: ".25rem 0",
  }));

  const value = {
    LoginButton,
    NavButtonBoxStyled,
    HtmlTooltip,
    StyledNavbar,
    LogoBox,
    LogoBottom,
    HamButton,
    ProductBoxWrapper,
  };
  return <StyleData.Provider value={value}>{children}</StyleData.Provider>;
};

export default StyleProvider;
export { useStyleData };
