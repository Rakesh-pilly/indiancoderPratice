import { Grid,Tabs, Tab, Toolbar, Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerComp from "./DrawerComp";

const Navbar = ({items}) => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div>
      <Toolbar sx = {{
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(131,0,255,1) 45%);'
      }}>

        { isMatch? <>
            <Typography>
              <ShoppingCartIcon />
            </Typography>
            <DrawerComp/>

        </>: 
        <Grid 
        display = "flex"
        alignItems="center"
        container spacing={2}>
          <Grid item xs={2}>
            <Typography>
              <ShoppingCartIcon />
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Tabs
              textColor="inherit"
              value={value}
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
            >

                {items.map(i=> <Tab label = {i}/>)}
             
            </Tabs>
          </Grid>

          <Grid item xs = {1} />
          <Grid item xs = {3} >
                <Box display={"flex"}>
                    <Button sx = {{marginLeft: "auto",
                    background: 'rgba(2,0,36,1)'
                }} variant = "contained">Login</Button>
                    <Button
                    sx ={{marginLeft:2,
                      background : 'rgba(2,0,36,1)'}}
                    variant = "contained">Singpup</Button>
                </Box>
            </Grid>
          
         

        </Grid>}
      </Toolbar>
    </div>
  );
};

export default Navbar;
