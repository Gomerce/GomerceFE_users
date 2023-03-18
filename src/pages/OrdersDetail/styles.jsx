import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const PageHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const Delivery = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "8px",
  marginBottom: "2%",
});
export const Frame = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#F4F5EF",
  borderRadius: "8px",
  padding: "2% 0",
  margin: "3% 0 1%",
  width: "100%",
  [theme.breakpoints.down("laptop_1024")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "4%",
  },
}));
export const TrackDisplay = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "1%",
  // [theme.breakpoints.down("laptop_1024")]: {
  //   display: "none",
  // },
}));
export const TrackItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});
export const IconBox = styled(Box)({
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  height: "80px",
  padding: "8px",
  margin: "0 auto",
});
export const CustomHr = styled("hr")(({ isChecked }) => ({
  width: "100%",
  marginBottom: "40px",
  border: isChecked ? "1px solid #B69D74" : "1px dashed #F4F5EF",
}));

export const DetailsMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "8px",
  margin: "5% 0 2%",
});
export const InfoWrapper = styled(Box)({
  width: "100%",
  padding: "0 1%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
});
export const OrderInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "2%",
  width: "205px",
  height: "146px",
  border: "1px solid #CED4DA",
  filter: "drop-shadow(0px 2px 2px rgba(142, 142, 142, 0.25))",
  borderRadius: "8px",
  margin: "2% 0",
  [theme.breakpoints.down("tablet_600")]: {
    width: "155px",
  },
  [theme.breakpoints.down("mobile_393")]: {
    width: "145px",
  },
  [theme.breakpoints.down("mobile_375")]: {
    width: "100%",
    margin: "2% auto",
  },
}));
export const ProductSummary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0 5%",
});
