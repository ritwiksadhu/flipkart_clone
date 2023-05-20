// STYLES IMPORT
import { Drawer, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
// COMPONENTS IMPORT
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";
// CONTEXT IMPORT
import { useStyleData } from "../../context/StyleProvider";
import { useContextData } from "../../context/ContextProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { StyledNavbar, LogoBox, LogoBottom, HamButton } = useStyleData();
  const { navDrawerOpen,handleNavOpenClose}  = useContextData()
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledNavbar position="fixed">
      <Toolbar
      className="nav__toolbar-styled"
      style={{
        zindex:"5"
      }}
      variant="dense">
        <HamButton
        onClick = {handleNavOpenClose}
        >
          <MenuIcon />
        </HamButton>

        <LogoBox component="div">
        <Link  to="/" style={{textDecoration:"none",color:"white"}} >
          <img src={logoURL} alt="flipkart logo" style={{ width: "75px" }} />
          <LogoBottom>
            Explore
            <Box component="span" style={{ color: "yellow", margin: "0 3px" }}>
              Plus
            </Box>
            <img
              src={subURL}
              alt="Flipkart plus logo"
              style={{ height: "10px" }}
            />
          </LogoBottom>
        </Link>
        </LogoBox>

        <SearchBox />
        <NavButtons responsiveClass="large-screen" />
        <Drawer
        open={navDrawerOpen}
        onClose={handleNavOpenClose}
        >
        <NavButtons responsiveClass="small-screen"  />
        </Drawer>
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
