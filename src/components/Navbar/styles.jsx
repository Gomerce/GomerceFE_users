import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const customAppBarStyle = (theme) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  width: "100%",
  // maxWidth: "1440px",
  minHeight: "90px",
  // padding: "20px, 53px",
  margin: "0 auto",
  alignItems: "center",
});

export const toolBarStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const StyledButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "368px",
  height: "34px",
  [theme.breakpoints.down("laptop_1024")]: {
    width: "100px",
  },
}));

export const buttonStyles = {
  width: "114px",
  height: "34px",
  border: "none",
  color: "#1F2839",
  padding: "8px",
  backgroundColor: "#F4F5EF",
  "&:hover": {
    backgroundColor: "#F4F5EF",
    border: "none",
  },
};
