import { AppBar, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import SearchBox from './SearchBox';
import NavButtons from './NavButtons';
// import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const StyledNavbar = styled(AppBar)(()=>({
      "backgroundColor":"#2874f0",
      "height":"55px",
      "display" :"flex",
      "justifyContent":"center",
      "box-shadow":"none"
      
  }))

  const LogoBox = styled(Box)(()=>({
    "margin-left":"12%",
    "display" :"flex",
    "flexDirection":"column",
    "alignItems" :"center"
    
  }))

  const LogoBottom = styled(Typography)(()=>({
    "fontSize" :"10px",
    "fontStyle":"italic",
    "display":"flex",
    "justifyContent":"center",
    "alignItems":"center"
  }))



  return (
    <StyledNavbar position="static">
  <Toolbar variant="dense">
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
  </Toolbar> 
</StyledNavbar>
  )
}

export default Navbar
