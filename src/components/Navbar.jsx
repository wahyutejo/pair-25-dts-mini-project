import React from "react";
import { Toolbar, AppBar, Typography, List, ListItem } from "@mui/material";

import { Link } from "react-router-dom";

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
            <ListItem sx={{ flexShrink: 2 }}>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem sx={{ flexShrink: 2 }}>
              <Link to="/tvseries">Series</Link>
            </ListItem>
            <ListItem sx={{ flexShrink: 2 }}>
              <Link to="/movies">Movies</Link>
            </ListItem>
            <ListItem sx={{ flexShrink: 1.5 }}>
              <Link to="/newandpopular">New and Popular</Link>
            </ListItem>
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
          <ListItem>Login</ListItem>
        </List>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
