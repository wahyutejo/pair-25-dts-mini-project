import React from "react";
import { Container, List, ListItem, Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 20, py: 2 }}>
        <Box>
          <List>
            <Typography>
              <ListItem>Audio and Subtitles</ListItem>
              <ListItem>Media Center</ListItem>
              <ListItem>Security</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>
                <Button sx={{ border: "solid", color: "black" }}>Service Code</Button>
              </ListItem>
              <ListItem>2022 Movies allright reserved</ListItem>
            </Typography>
          </List>
        </Box>

        <Box>
          <List>
            <Typography>
              <ListItem>Audio Description</ListItem>
              <ListItem>Investor Relations</ListItem>
              <ListItem>Legal Provisions</ListItem>
            </Typography>
          </List>
        </Box>

        <Box>
          <List>
            <Typography>
              <ListItem>Help Center</ListItem>
              <ListItem>Jobs</ListItem>
              <ListItem>Cookies Preferences</ListItem>
            </Typography>
          </List>
        </Box>

        <Box>
          <List>
            <Typography>
              <ListItem>Gift Cards</ListItem>
              <ListItem>Term of Use</ListItem>
              <ListItem>Corporate Information</ListItem>
            </Typography>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
