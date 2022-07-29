import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {

    const [open, setOpen] = useState(false);

  return (
    <div>

    <Drawer
      anchor={'left'}
      open={open}
      onClose = {()=> setOpen(false)}
 
    >

        <List>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                        products
                    </ListItemText>
                </ListItemIcon>

            </ListItemButton>
        </List>



    </Drawer>

    
    <IconButton sx= {{
        marginLeft: 'auto',
        color: "white"
    }} onClick = {()=> setOpen(prev => !prev)}>
            <MenuIcon/>
        </IconButton>


    </div>
  )
}

export default DrawerComp