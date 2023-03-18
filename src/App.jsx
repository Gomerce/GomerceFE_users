import Views from "./Views/Views";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { Box, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./App.css";
import FloatingButton from "./components/FloatingButton";
const App = () => {
  let location = useLocation();

  const AppContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  }));
  const exceptPath = [
    "/login",
    "/signup",
    "/page-not-found",
    "/page-under-maintenance",
    "/internal-server-error",
  ];

  return (
    <AppContainer>
      {!exceptPath.includes(location.pathname) && <Navbar />}
      <Views />
      <FloatingButton />
      {!exceptPath.includes(location.pathname) && <Footer />}
    </AppContainer>
  );
};

export default App;
