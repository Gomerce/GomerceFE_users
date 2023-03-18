import React from "react";

import Grid from "@mui/material/Grid";
import { Button, InputLabel, Link, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./styles.css";
const LoginComponent = () => {
  // References
  const emailRef = useRef();

  // States
  const [email, setEmail] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Autofocus

  // useEffect(() => {
  //   emailRef.current.getElementsByTagName("input")[0].focus();
  // }, []);

  const handleSubmit = async (event) => [
    console.log(
      "You tried to login! \nFeature coming soon, please come back later!"
    ),
  ];
  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundImage: "url(images/signin.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item mobile_0={0} mobile_550={5} tablet_840={6} laptop_1024={8} />

      <Grid
        item
        sx={{ background: "white", p: 4 }}
        mobile_0={10}
        mobile_550={7}
        tablet_840={6}
        laptop_1024={4}
      >
        <Grid container className="full_height550" alignContent="center">
          <Grid container direction="column" alignItems="center" rowGap={2}>
            <Typography variant="h5">Welcome back</Typography>
            <Typography variant="body2">Please enter your details</Typography>
          </Grid>

          <Grid container component="form" rowGap={4} onSubmit={handleSubmit}>
            <Grid container direction="column">
              <InputLabel>Email</InputLabel>
              <TextField
                size="small"
                required
                fullWidth
                ref={emailRef}
                type="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>

            <Grid container direction="column">
              <InputLabel>Password</InputLabel>
              <TextField size="small" required fullWidth type="password" />
            </Grid>

            <Grid container direction="column" rowGap={2} alignItems="center">
              <Button variant="contained" type="submit" sx={{ px: 6 }}>
                Sign in
              </Button>

              <Typography variant="body2">
                Don't have an account? <Link href="/signup">Sing up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
