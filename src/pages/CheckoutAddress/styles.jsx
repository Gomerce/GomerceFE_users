import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)(({ theme }) => ({
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

export const Group = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "2% 0",
  height: "auto",
  width: "100%",
}));
