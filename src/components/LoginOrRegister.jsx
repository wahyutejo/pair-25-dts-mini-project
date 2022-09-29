import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginWithEmailAndPassword, registerWithEmailAndPassword } from "../authentication/firebase";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [credential, setCredential] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  const textFieldEmailOnChange = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChange = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const buttonLoginOrRegister = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  return (
    <Grid spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "95vh" }}>
      <Box component="form" sx={{ border: "1px solid grey", borderRadius: "1em", p: 1, display: "flex", flexDirection: "column", gap: 1, mt: 20 }}>
        <Typography variant="body1">{loginOrRegister === "login" ? "Login Page" : "Register Page"}</Typography>
        <TextField label="email" type="email" variant="outlined" size="small" value={credential.email} onChange={textFieldEmailOnChange} />
        <TextField label="password" type="email" variant="outlined" size="small" value={credential.password} onChange={textFieldPasswordOnChange} />
        <Button variant="outlined" size="small" onClick={buttonLoginOrRegister}>
          {loginOrRegister === "login" ? "Login" : "Register"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">Buat Akun</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">Sudah punya akun</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegister;
