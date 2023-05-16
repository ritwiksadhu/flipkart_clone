import React from 'react'
import { Box, Button, Badge } from '@mui/material'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavButtons = () => {

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.white,
          "&::before": {
              backgroundColor: theme.palette.common.white,
            }
        },
      }));

      // FIX THE HOVER EFFECT
    
  return (
    <Box
    sx={{
        display:"flex",
        justifyContent:"space-Between",
        alignItems:"center",
        width:"30%",
        marginLeft:"2%"
    }}
    >
 <HtmlTooltip
        title={
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            marginLeft:"2%"
          }}>
{/* Buttons goes here */}
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
          </Box>
        }
        arrow
      >
        <Button
        sx={{
            color:"#2874f0",
            background:"white",
            border:"1px solid #2874f0 ",
            borderRadius:"1px",
            fontSize:".9rem",
            padding:".2rem 2.5rem",
            textTransform:"capitalize"
        }}
        >Login</Button>
        
      </HtmlTooltip>
      <Button
      disabled
      style={{
        background:"transparent",
        whiteSpace:"nowrap",
        textTransform:"capitalize",
        color:"#fff"

      }}
      >Become a Seller</Button>
      <Button
    sx={{
      color:"white",
      textTransform:"capitalize",

    }}
    >More</Button>
    {/* PUT THE LOGIC FOR THE BADGE NOTIFICATION */}
    <Button
    style={{color:"white",
    textTransform:"capitalize",

  }}
    >
      <Badge sx={{
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: "red"
        }
      }}
      badgeContent={0} max={9}>
      <ShoppingCartIcon />
      <Box variant="span">
        Cart
      </Box>
      </Badge>
        </Button>
    </Box>
  )
}

export default NavButtons
