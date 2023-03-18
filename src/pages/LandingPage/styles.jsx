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
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "5% 0 2%",
  padding: "4px",
}));

export const CollectionRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: "3%",
  padding: "0px",
  [theme.breakpoints.down("tablet_650")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("mobile_375")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2%",
  width: "279px",
  height: "383px",
  background: "#FDFDFD",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
  margin: "4px",

  [theme.breakpoints.between("mobile_550", "tablet_834")]: {
    width: "230px",
    height: "340px",
    marginBottom: "4%",
  },

  [theme.breakpoints.down("mobile_550")]: {
    width: "166px",
    height: "246px",
    marginBottom: "5%",
  },
  [theme.breakpoints.down("mobile_400")]: {
    width: "155px",
    height: "235px",
  },
  [theme.breakpoints.down("mobile_375")]: {
    width: "180px",
  },
}));

export const BestSellers = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2%",
  margin: "1% 0 2%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "2px",
}));

export const Image = styled(Box)(({ image, theme }) => ({
  width: "100%",
  maxWidth: "250px",
  height: "200px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${image})`,
}));
