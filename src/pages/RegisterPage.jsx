import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegister";
import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

const RegisterPage = () => {
  return (
    <Container className="App">
      <Box className="App-header">
        <Navbar />
      </Box>
      <Box className="Login-Register">
        <LoginOrRegisterForm loginOrRegister={"register"} />
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </Container>
  );
};
export default RegisterPage;
