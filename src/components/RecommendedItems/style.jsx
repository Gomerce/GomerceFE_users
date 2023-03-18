import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "space-between",
  margin: "5% 0",
  padding: "3%",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
}));
