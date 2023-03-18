import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";

// Regex
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[a-zA-Z0-9-!@#$%][a-zA-Z0-9-!@#$%]{7,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Registered_URL = "/register";

const SignupComponent = () => {
  /*References*/
  const userRef = useRef();
  const errRef = useRef();

  /*States*/
  const [user, setUser] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isUserFocus, setIsUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isPwdFocus, setIsPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [isValidMatch, setIsValidMatch] = useState(false);
  const [isMatchFocus, setIsMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Autofocus the username field
  useEffect(() => {
    userRef.current.getElementsByTagName("input")[0].focus();
  }, []);

  // Reset error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  /* 
    Validations
   */

  // Username validation
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setIsValidName(result);
  }, [user]);

  // Email validation
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setIsValidEmail(result);
  }, [email]);

  // Password Validation
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setIsValidPwd(result);
    const match = pwd === matchPwd;
    setIsValidMatch(match);
  }, [pwd, matchPwd]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enforce entry validation incase button was enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    // try {
    //   axios.post(
    //     Registered_URL,
    //     { user, pwd },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   setIsSuccess(true);
    // } catch (error) {
    //   console.log(error?.message);
    //   if (!error?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (error.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Tailed");
    //   }
    //   errRef.current!.focus();
    // }
  };

  return (
    <>
      {isSuccess ? (
        <section>
          <Typography variant="h1">Successfully Registered</Typography>
          <Button variant="text" href="/login">
            Sign In
          </Button>
        </section>
      ) : (
        <Grid
          container
          component="section"
          direction="row"
          // className="content"
          sx={{
            height: "100vh",
            background: "url(images/signup.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          justifyContent="center"
          alignContent="center"
        >
          <Grid
            item
            mobile_0={10}
            mobile_550={7}
            tablet_840={6}
            laptop_1024={4}
            sx={{ background: "white" }}
          >
            <Grid
              className="full_height550"
              container
              direction="column"
              sx={{ p: 4 }}
              justifyContent="center"
            >
              <Grid container direction="column" rowGap={2}>
                <Grid container direction="column" alignItems="center">
                  <p
                    ref={errRef}
                    aria-live="assertive"
                    className={errMsg ? "error" : "offscreen"}
                  >
                    {errMsg}
                  </p>
                  <Typography variant="h5">Create an account</Typography>
                  <Typography variant="body2">Let's get you started</Typography>
                </Grid>

                <Stack component="form" spacing={2} onSubmit={handleSubmit}>
                  <Box>
                    <InputLabel>Username</InputLabel>
                    <TextField
                      size="small"
                      type="text"
                      ref={userRef}
                      id="username"
                      required
                      fullWidth
                      error={!isValidName && isUserFocus}
                      autoComplete="off"
                      onChange={(event) => {
                        setUser(event.target.value);
                      }}
                      onFocus={() => setIsUserFocus(true)}
                      onBlur={() => setIsUserFocus(false)}
                    />
                  </Box>

                  <Box>
                    <InputLabel>Email</InputLabel>
                    <TextField
                      size="small"
                      type="email"
                      id="email"
                      required
                      fullWidth
                      error={!isValidEmail && isEmailFocus}
                      autoComplete="off"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      onFocus={() => setIsEmailFocus(true)}
                      onBlur={() => setIsEmailFocus(false)}
                    />
                  </Box>

                  <Box>
                    <InputLabel>Password</InputLabel>
                    <TextField
                      size="small"
                      type="password"
                      id="pwd"
                      fullWidth
                      error={!isValidPwd && isPwdFocus}
                      required
                      autoComplete="off"
                      onChange={(event) => {
                        setPwd(event.target.value);
                      }}
                      onFocus={() => setIsPwdFocus(true)}
                      onBlur={() => setIsPwdFocus(false)}
                    />
                  </Box>
                  <Box>
                    <InputLabel>Confirm Password</InputLabel>
                    <TextField
                      size="small"
                      type="password"
                      id="confirmPwd"
                      required
                      error={!isValidMatch && isMatchFocus}
                      helperText={
                        !isValidMatch &&
                        isMatchFocus &&
                        "Must match the above password input field"
                      }
                      fullWidth
                      onChange={(event) => {
                        setMatchPwd(event.target.value);
                      }}
                      onFocus={() => setIsMatchFocus(true)}
                      onBlur={() => setIsMatchFocus(false)}
                    />
                  </Box>
                  <Grid
                    container
                    direction="column"
                    rowGap={2}
                    alignItems="center"
                  >
                    <Button variant="contained" type="submit" sx={{ px: 6 }}>
                      Create Account
                    </Button>

                    <Typography variant="body2">
                      Already have an account?{" "}
                      <Link href="/login">Login in</Link>
                    </Typography>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            mobile_0={0}
            mobile_550={5}
            tablet_840={6}
            laptop_1024={8}
          />
        </Grid>
      )}
    </>
  );
};

export default SignupComponent;
