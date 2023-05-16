import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SearchBox from './SearchBox';
import NavButtons from './NavButtons';
import { blue} from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';


// import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const StyledNavbar = styled(AppBar)(({ theme}) => ({
    backgroundColor: blue[600],
    height:"55px",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    boxShadow:"none",
    border:"1px solid red",
    margin:"0"
  }));

  const LogoBox = styled(Box)(({theme})=>({
    "marginLeft":"12%",
    "display" :"flex",
    "flexDirection":"column",
    "alignItems" :"center",
    [theme.breakpoints.down("sm")]:{
      // marginLeft:"5%"
    }
  }))

  const LogoBottom = styled(Typography)(()=>({
    "fontSize" :"10px",
    "fontStyle":"italic",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center"
  }))

  const Ham_Button = styled(IconButton)(({theme})=>({
    [theme.breakpoints.up("md")]:{
      display:"none"
    }
  }))


  return (
    <StyledNavbar position="static">
  <Toolbar variant="dense">

    <Ham_Button>
      <MenuIcon/>
    </Ham_Button>

    <LogoBox component="div" >
        <img src={logoURL}
         alt="flipkart logo"
         style={{ width:"75px"}}
         />
         <LogoBottom>
            Explore 
          <Box
          component="span" 
          style={{color:"yellow",margin:"0 3px",
        }}
          >
            Plus
          </Box>
          <img src={subURL} alt="Flipkart plus logo"
          style={{height:"10px"}}
          />
         </LogoBottom>
    </LogoBox>
    <SearchBox/>
    <NavButtons/>
    <Drawer >
      {/* Navbutton component goes here */}
    </Drawer>
  </Toolbar> 
</StyledNavbar>
  )
}

export default Navbar
