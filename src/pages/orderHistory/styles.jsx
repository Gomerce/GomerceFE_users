import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PageHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const StatusBadge = styled(Box)(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1% 0",
  width: "151.14px",
  borderRadius: "4px",
  color: "#fff",
  backgroundColor: `${color}`,
  textTransform: "uppercase",
}));
