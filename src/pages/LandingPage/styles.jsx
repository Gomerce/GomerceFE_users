import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const CategoriesSideBar = styled(Box)(({ theme }) => ({
  marginTop: "5%",
  backgroundColor: "#ffffff",
  width: "280px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 15px",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
}));

export const categoryText = {
  width: "68px",
  height: "16px",
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  color: "#8E8E8E",
  lineHeight: "16px",
};

export const CategoriesListWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const listLabelStyles = {
  width: "100%",
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  textTransform: "capitalize",
};

export const CollectionsWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1012px",
  left: "358px",
  display: "flex",
  flexWrap: "wrap",
}));

export const CollectionRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  margin: "3% auto",
}));
export const collectionHeading = {
  fontWeight: "600",
  fontSize: "18.75px",
  lineHeight: "22px",
  color: "#8E8E8E",
};
export const CollectionCardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "15px 20px",
  width: "290px",
  height: "383px",
  gab: "10px",
  background: "#FDFDFD",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
  margin: "0 5px",
};

export const CardTextHeading = {
  fontWeight: "600",
  fontSize: "18.75px",
  color: "#000000",
  width: "230px",
  height: "22px",
  lineHeight: "22px",
};

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
