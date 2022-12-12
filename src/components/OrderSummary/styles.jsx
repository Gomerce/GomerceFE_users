import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export const textStyle = {
  height: "36px",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  textTransform: "uppercase",
};

export const btnStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  height: "36px",
  alignItems: "center",
  padding: "0px",
  background: "#F4F5EF",
  color: "#1F2839",
  alignSelf: "stretch",
  flexGrow: "0",
};
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
  width: "100%",
}));
