import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const RightArrow = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "45.23px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: "5",
  top: "45%",
  right: "-2%",
  cursor: "pointer",
  [theme.breakpoints.up("tablet_650")]: {
    display: "flex",
  },
}));

export default RightArrow;
