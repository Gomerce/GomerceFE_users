import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Details = styled(Box)({
  width: "100%",
  height: "553px",
  background: "#FFFFFF",
  padding: "2%",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

export const Image = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "337px",
  height: "406px",
  background: "#FFFFFF",
});
export const Preview = styled("div")(({ img }) => ({
  width: "305px",
  height: "305px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
  border: "none",
}));
export const ThumbnailsSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "2% 0 1%",
});
export const Thumbnail = styled("div")(({ img }) => ({
  width: "50px",
  height: "50px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
  border: "none",
}));
export const ItemDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "#fff",
  width: "100%",
});

export const Wrap = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: "60px",
});
export const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "428px",
  height: "296px",
  background: "#FFFFFF",
  border: "1px solid #AEAEAE",
  borderRadius: "8px",
  padding: "2%",
});
export const ListWrap = styled("ul")({
  width: "100%",
  height: "100%",
  marginLeft: "5%",
});
export const Specifications = styled(Box)({
  margin: "3% 0",
  padding: "1.5% 2.5%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});
export const ReviewsSection = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});
export const RatingSummary = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2%",
  width: "100%",
  height: "100%",
});
export const CommentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "16px",
  width: "848px",
  height: "160px",
  background: "#FFFFFF",
  borderBottom: "1px solid #CED4DA",
  margin: "2% 0",
});
export const IconsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  margin: "2% 0",
});
export const DetailsWrap = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const ShareSection = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const BarWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2% 1.5%",
  width: "879px",
});
export const ReviewsStatusText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
});
export const ReviewsHeadWrap = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});
