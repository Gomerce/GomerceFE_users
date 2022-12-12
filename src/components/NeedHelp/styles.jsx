import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "16px",
  gap: "14px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
}));
