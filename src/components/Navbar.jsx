import React from "react";
import { Toolbar, AppBar, Typography, List, ListItem, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function home() {
    return navigate("/");
  }
  function series() {
    return navigate("/series");
  }
  function movies() {
    return navigate("/movies");
  }
  function newandpopular() {
    return navigate("/newandpopular");
  }
  function loginPage() {
    return navigate("/login");
  }

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#282c34" }}>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <Typography>
            <ListItem>Home Icon</ListItem>
          </Typography>
        </List>

        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ display: "flex" }}>
            <ListItem sx={{ flexShrink: 2, "&:hover": { cursor: "pointer" } }} onClick={home}>
              Home
            </ListItem>
            <ListItem sx={{ flexShrink: 2, "&:hover": { cursor: "pointer" } }} onClick={series}>
              Series
            </ListItem>
            <ListItem sx={{ flexShrink: 2, "&:hover": { cursor: "pointer" } }} onClick={movies}>
              Movies
            </ListItem>
            <ListItem sx={{ "&:hover": { cursor: "pointer" } }} onClick={newandpopular}>
              New and Popular
            </ListItem>
          </Typography>
        </List>
        <List
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
          }}
        >
          <Button onClick={loginPage}>Login/Register</Button>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
