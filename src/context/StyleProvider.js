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

  const HamButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: blue[600],
    height: "55px",
    justifyContent:"center",
    boxShadow: "none",
    width:"100%",
    border: "1px solid red",
    overflow:"hidden",
    "& > .nav__toolbar-styled":{
      width:"100%",
      border:"1px solid blue"
    }

  }));

  const SeatchBoxStyled = styled(Box)(({ theme }) => ({
    width: "70%",
    marginLeft: "2%",
    maxWidth: "550px",
    borderRadius: "2px",
    overflow: "hidden",
    display: "flex",
    
    [theme.breakpoints.up("xm")]:{
      width:"60%"
    },
    [theme.breakpoints.up("md")]:{
      width:"45%"
    },
    [theme.breakpoints.up("sm")]:{
      width:"30%"
    },
    [theme.breakpoints.down("sm")]:{
      width:"55%"
    },
  }));

  const LogoBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border:"1px solid red",
    marginLeft:"16%",

    [theme.breakpoints.down("xl")]:{
      marginLeft:"13%",
    },

    [theme.breakpoints.down("md")]:{
      marginLeft:"3%",
    },
    [theme.breakpoints.down("sm")]:{
      marginLeft:"0%",
    },
  }));

  const LogoBottom = styled(Typography)(() => ({
    fontSize: "10px",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const NavButtonBoxStyled = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    width: "30%",
    marginLeft: "2%",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
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
    overflow:"auto",
    "&::-webkit-scrollbar" : {
      display: "none"
    },
    [theme.breakpoints.down("lg")]:{
      width:"80%"
    }
  }));

  const ProductCategoryCard = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:"100px",
    width:"80px",
    flexGrow:"0",
    flexShrink:"0",
    whiteSpace:"nowrap",
    margin:"0 2%",
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
    SeatchBoxStyled,
    ProductCategoryCard
  };
  return <StyleData.Provider value={value}>{children}</StyleData.Provider>;
};

export default StyleProvider;
export { useStyleData };
