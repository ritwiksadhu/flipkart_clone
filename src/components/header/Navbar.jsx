// STYLES IMPORT
import { Drawer, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
// COMPONENTS IMPORT
import NavButtons from "./NavButtons";
import SearchBox from "./SearchBox";
// CONTEXT IMPORT
import { useStyleData } from "../../context/StyleProvider";

const Navbar = () => {
  const { StyledNavbar, LogoBox, LogoBottom, Ham_Button } = useStyleData();

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledNavbar position="static">
      <Toolbar variant="dense">
        <Ham_Button>
          <MenuIcon />
        </Ham_Button>

        <LogoBox component="div">
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
        </LogoBox>
        <SearchBox />
        <NavButtons />
        <Drawer>{/* Navbutton component goes here */}</Drawer>
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
