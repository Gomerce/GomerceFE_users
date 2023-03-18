import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Row = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "2%",
});

export const Summary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  width: "100%",
});
