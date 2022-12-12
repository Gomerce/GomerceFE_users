import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ResultContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px",
}));

export const Title = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "36px",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  flexGrow: "0",
}));

export const Label = styled(Typography)(({ theme }) => ({
  width: "192px",
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  flex: "none",
  order: "0",
  flexGrow: "0",
}));

export const SideFilters = {
  display: "flex",
  flexDirection: "column",
  padding: "3% 1%",
  width: "100%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
};
export const FilterCover = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px 0px 19px",
  gap: "16px",
  borderBottom: "1px solid #F4F5EF",
  flex: "none",
  order: "0",
  flexGrow: "0",
};

export const HeadingStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "4px 0px",
  gap: "10px",

  flex: "none",
  order: "0",
  flexGrow: "0",
};

export const TextLabel = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  flex: "none",
  order: "1",
  flexGrow: "0",
};
