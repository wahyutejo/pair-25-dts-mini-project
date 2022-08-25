import React from "react";
import { Box, List, ListItem, Typography, Button, Container } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profiles = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ height: "100vh", pt: 20, m: 20 }}>
        <Box>
          <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
            Who's watching?
          </Typography>
        </Box>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItem>
            <Container>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Nama
                </Typography>
              </Box>
            </Container>
          </ListItem>
          <ListItem>
            <Container>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Nama
                </Typography>
              </Box>
            </Container>
          </ListItem>
          <ListItem>
            <Container>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Nama
                </Typography>
              </Box>
            </Container>
          </ListItem>
          <ListItem>
            <Container>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Nama
                </Typography>
              </Box>
            </Container>
          </ListItem>
          <ListItem>
            <Container>
              <ControlPointIcon
                sx={{
                  width: 200,
                  height: 200,
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Tambah
                </Typography>
              </Box>
            </Container>
          </ListItem>
        </List>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mt: 3,
                border: "solid",
                p: 1,
              }}
            >
              MANAGE PROFILE
            </Typography>
          </Button>
        </Box>
      </Container>
      <Container sx={{ mt: 20 }}>
        <Footer />
      </Container>
    </>
  );
};

export default Profiles;
