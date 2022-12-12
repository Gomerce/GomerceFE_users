import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const CustomSection = styled(Box)({
  padding: "10px",
});

export const ActionRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1%",
  width: "100%",
});

export const CustomCartMain = styled(Box)({
  padding: "3%",
  width: "100%",
  background: " #FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

export const CustomSummary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "3%",
  gap: "16px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});
