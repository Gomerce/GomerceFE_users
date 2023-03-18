import { ThemeProvider } from "@emotion/react";

import theme from "../../Theme/Theme";
import React from "react";
import SignupComponent from "../../components/Signup/SignupComponent";

const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignupComponent />
    </ThemeProvider>
  );
};

export default Signup;
