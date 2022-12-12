import Views from "./Views/Views";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProductCategories } from "./actions/products";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, styled } from "@mui/material";

const App = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories());
  }, [dispatch]);
  const AppContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <AppContainer>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Views />
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </AppContainer>
  );
};

export default App;
