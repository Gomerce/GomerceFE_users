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
export const Frame = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#F4F5EF",
  borderRadius: "8px",
  padding: "2% 0",
  margin: "3% 0 1%",
  width: "100%",
});
export const TrackDisplay = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "1%",
});
export const TrackItem = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
export const IconBox = styled(Box)({
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70px",
  height: "70px",
});
export const CustomHr = styled("hr")(({ isChecked }) => ({
  width: "170px",
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
});
export const OrderInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1%",
  width: "205px",
  height: "146px",
  border: "1px solid #CED4DA",
  filter: "drop-shadow(0px 2px 2px rgba(142, 142, 142, 0.25))",
  borderRadius: "8px",
  margin: "2% 0",
});
export const ProductSummary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0 5%",
});
