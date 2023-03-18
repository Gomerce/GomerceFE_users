import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledSelect = styled(TextField)(({ background, border }) => ({
  background: background === "true" ? "#F4F5EF" : "",
  border: border === "true" ? "1px solid #CED4DA" : "none",
}));

export const sortLabelStyle = {
  width: "63px",
  height: "16px",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "1.25px",
  textTransform: "uppercase",
  color: "#1F2839",
  flex: "none",
  order: "0",
  flexGrow: "0",
};
