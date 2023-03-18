import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";

const ScrollToTopButton = styled(Box)(({ backToTop, theme }) => ({
  display: backToTop ? "inline-block" : "none",
  position: "fixed",
  bottom: "20px",
  right: "50px",
  zIndex: 20,
  [theme.breakpoints.down("tablet_600")]: {
    right: "15px",
  },
}));

const FloatingButton = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollToTopButton backToTop={backToTop}>
      <Fab color="secondary" aria-label="back to top" onClick={scrollUp}>
        <KeyboardArrowUpIcon fontSize="large" sx={{ color: "white" }} />
      </Fab>
    </ScrollToTopButton>
  );
};

export default FloatingButton;
