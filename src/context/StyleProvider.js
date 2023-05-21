import React, { useContext, createContext } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/base";
import { blue, green } from "@mui/material/colors";
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
    position:"fixed",
    top:"0",
    left:"0",
    zindex:"2",
    height: "55px",
    justifyContent:"center",
    boxShadow: "none",
    width:"100%",

    "& > .nav__toolbar-styled":{
      width:"100%",
    },
  }));

  const SearchBoxStyled = styled("form")(({ theme }) => ({
    width: "70%",
    marginLeft: "2%",
    maxWidth: "550px",
    borderRadius: "2px",
    // overflow: "hidden",
    display: "flex",
    position:"relative",
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
    "&.large-screen":{
    display: "none",
    alignItems: "center",
    width: "30%",
    marginLeft: "2%",
    "& button":{
      color:"white",
    },
    "& .loginBtn":{
      color:blue[800],

    },
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
  },
    "&.small-screen":{
      display:"none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width: "15rem",
        transition:"all 1s ease",

        "& button":{
          color:"black",
          borderBottom:"1px solid rgb(220,220,220)",
          width:'98%',
          marginTop:"2rem",
          "&.loginBtn":{
            border:"none",
            background:"#ff9f00",
            color:"white"
          },
        },
      },
    }
  }));

  const ProductCategoryBoxWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    width: "1",
    height: "1",
    marginTop:"52px",
    marginBottom:".25rem",
    padding: ".25rem 0",
    overflow:"auto",
    backgroundColor:"white",
    
    borderBottom:"1px solid rgba(198,198,198,1)",
    "&::-webkit-scrollbar" : {
      display: "none"
    },
    [theme.breakpoints.down("lg")]:{
      width:"80%"
    },

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
    margin:"0 2rem",
    [theme.breakpoints.down("sm")]:{
      margin:"0 1rem",
    }
  }));

  const ProductDetailsText = styled(Typography)(({ theme }) => ({
    fontSize: ".9rem",
  }));
  
  const SearchItemWrapper = styled(Box)(({theme})=>({
    textAlign: "center",
    width: "100%",
    alignSelf: "center",
    borderBottom: "1px solid rgb(200,200,200)",
    // display: "flex",
    // justifyContent: "space-between",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "1fr",
    [theme.breakpoints.down("md")]:{
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    }
  }));

  const ProductDetailsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "1rem",
    width: "60%",
    gridArea: "1 / 2 / 2 / 5",
    [theme.breakpoints.down("md")]:{
      width: "100%",
      margin: ".25rem",
    },
    [theme.breakpoints.down("sm")]:{
      display:'none'
    },
  }));

  const ProductPriceSegment = styled("ul")(({theme}) => ({
    display: "grid",
    placeContent: "center",
    marginRight: "5%",
    flexShrink: "0",
    flexGrow: "0",
    gridArea: "1 / 5 / 2 / 6",
    [theme.breakpoints.down("sm")]:{
      gridArea: "1 / 2 / 3 / 4",
    }
  }));
  

  const StarRatingStyle = styled(Box)(({ theme }) => ({
    background: green[500],
    color: "white",
    width: "fit-content",
    display: "flex",
    padding: ".1rem .5rem",
    borderRadius: "3px",
    fontSize: ".8rem",
    flexDirection: "row",
    alignItems: "center",
    marginTop: ".25rem",
  }));

  const ProductDiscountPrice = styled(Box)(({theme}) => ({
    display: "inline",
    color: "green",
    fontSize: ".8rem",
    fontWeight: "500",
    width: "max-content",
  }));
  const StrikedProductPrice = styled(Box)(({theme}) => ({
    textDecoration: "line-through",
    display: "inline",
    fontSize: "1.2rem",
  }));


  // AUTH COMPONENT STYLES

  const AuthComponentOuterWrappers = styled(Box)(({theme})=>({

  }))
  const AuthComponentInnerWrappers = styled(Box)(({theme})=>({

  }))
  const AuthLeftSegment = styled(Box)(({theme})=>({

  }))
  const AuthLeftHeader = styled(Typography)(({theme})=>({

  }))
  const AuthLeftPara = styled(Typography)(({theme})=>({
    fontSize: "1.2rem",
    margin: "1rem",
  }))
  const AuthRightwrapper = styled(Typography)(({theme})=>({

  }))
  const AuthRightForm = styled(Typography)(({theme})=>({

  }))
  const SubmitBtnStyle = styled(Button)(({theme})=>({

  }))


  const value = {
    LoginButton,
    NavButtonBoxStyled,
    HtmlTooltip,
    StyledNavbar,
    LogoBox,
    LogoBottom,
    HamButton,
    ProductCategoryBoxWrapper,
    SearchBoxStyled,
    ProductDetailsText,
    ProductCategoryCard,
    SearchItemWrapper,
    ProductDetailsBox,
    StarRatingStyle,
    ProductPriceSegment,
    ProductDiscountPrice,
    StrikedProductPrice,
    AuthComponentOuterWrappers,
    AuthComponentInnerWrappers,
    AuthLeftSegment,
    AuthLeftHeader,
    AuthLeftPara,
    AuthRightwrapper,
    AuthRightForm,
    SubmitBtnStyle,
  };


  return <StyleData.Provider value={value}>{children}</StyleData.Provider>;
};

export default StyleProvider;
export { useStyleData };
