import React from "react";
import { Toolbar, AppBar, Typography, List, ListItem } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <AppBar>
      <Typography sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#282c34" }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <ListItem>Hallo Icon</ListItem>
        </List>
        <Toolbar sx={{ justifyContent: "center" }}>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItem sx={{ flexShrink: 2 }}>Home</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>Series</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>Movies</ListItem>
            <ListItem sx={{ flexShrink: 1.5 }}>New and Popular</ListItem>
            <ListItem sx={{ flexShrink: 2 }}>MyList</ListItem>
          </List>
        </Toolbar>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          {/* <ListItem>
            <SearchIcon />
          </ListItem>
          <ListItem>User</ListItem>
          <ListItem>
            <CardGiftcardIcon />
          </ListItem>
          <ListItem>
            <NotificationsIcon />
          </ListItem> */}
          <ListItem>MyList</ListItem>
        </List>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
