import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "3%",
  gap: "4px",
  width: "100%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: " 4px",
}));

export const Navigate = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "1em",
}));
