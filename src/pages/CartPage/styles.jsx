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
  marginBottom: "1em",
});

export const CustomCartMain = styled(Box)(({ theme }) => ({
  padding: "3%",
  width: "100%",
  background: " #FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",

  [theme.breakpoints.down("mobile_400")]: {
    padding: "0%",
  },
}));

export const CustomSummary = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "3%",
  gap: "16px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  [theme.breakpoints.down("tablet_600")]: {
    marginTop: "1em",
  },
}));
export const Row = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "2%",
});
