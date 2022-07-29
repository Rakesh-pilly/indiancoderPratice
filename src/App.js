import { Grid, AppBar, Toolbar, Typography, Tabs, Tab, Drawer } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Navbar from "./componets/Navbar";
import DrawerComp from "./componets/DrawerComp";
import Auth from "./componets/Auth";

const linksArray = ['Products', "Services", 'Overview', "Contact Us"]

function App() {
  return (

    <>
   
    {/* <AppBar>

      <Navbar items = {linksArray}/>
    </AppBar> */}
<Auth/>

    </>
  );
}

export default App;
