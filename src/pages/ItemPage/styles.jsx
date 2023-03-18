import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Details = styled(Box)({
  width: "100%",
  background: "#FFFFFF",
  padding: "2%",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

export const Image = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "337px",
  height: "406px",
  background: "#FFFFFF",

  [theme.breakpoints.down("tablet_600")]: {
    width: "100%",
  },
}));
export const Preview = styled("div")(({ img, theme }) => ({
  width: "305px",
  height: "305px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
  border: "none",
  [theme.breakpoints.down("tablet_600")]: {
    width: "100%",
  },
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
  width: "100%",
});

export const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: "60px",
  [theme.breakpoints.down("tablet_600")]: {
    marginTop: "1.3em",
  },
}));
export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "428px",
  height: "296px",
  background: "#FFFFFF",
  border: "1px solid #AEAEAE",
  borderRadius: "8px",
  padding: "2%",
  [theme.breakpoints.down("tablet_650")]: {
    margin: "0 auto",
  },
  [theme.breakpoints.down("tablet_600")]: {
    width: "300px",
    height: "240px",
    padding: "16px",
  },
}));
export const ListWrap = styled("ul")({
  width: "100%",
  height: "100%",
  marginLeft: "5%",
});
export const Specifications = styled(Box)({
  margin: "3% 0",
  padding: "5% 2.5%",
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
export const RatingSummary = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2%",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("tablet_600")]: {
    flexDirection: "column",
  },
}));
export const CommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "16px",
  width: "848px",
  height: "auto",
  background: "#FFFFFF",
  borderBottom: "1px solid #CED4DA",
  margin: "2% 0",
  [theme.breakpoints.down("laptop_1024")]: {
    width: "100%",
  },
}));
export const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  margin: "2% 0",
  [theme.breakpoints.down("tablet_600")]: {
    margin: "2% 0 0",
  },
}));
export const DetailsWrap = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const ShareSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.between("tablet_769", "tablet_840")]: {
    marginBottom: "10px",
  },
}));
export const BarWrap = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2% 1.5%",
  width: "100%",
});
export const ReviewsStatusText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100%",
  [theme.breakpoints.down("tablet_600")]: {
    margin: "2% auto",
    alignItems: "center",
  },
}));
export const ReviewsHeadWrap = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});
