import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ColumnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0% 5%",
  [theme.breakpoints.down("tablet")]: {
    marginTop: "3%",
  },
}));
export const ColumnTitleStyle = {
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#F4F5EF",
};
export const CustomListItems = styled("li")(({ theme }) => ({
  listStyle: "none",
  color: "#ffffff",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "1% 0%",
  margin: "3% 0%",
  width: "100%",
  cursor: "pointer",
}));

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2% 0%",
  background: "#B69D74",
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "5% 10% 2%",
  [theme.breakpoints.down("laptop")]: {
    padding: "5% 4% 2%",
  },
  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const DividerStyle = {
  width: "100%",
  background: "#FFFFFF",
  alignSelf: "stretch",
};

export const FooterBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5% 8% ",
  width: "100%",
  height: "auto",
  alignSelf: "stretch",
  [theme.breakpoints.down("laptop")]: {
    padding: "1.5% 4% ",
  },
  [theme.breakpoints.down("mobile_large")]: {
    flexDirection: "column",
  },
}));
export const SocialStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "8px",
  gap: "20px",
  width: "auto",
}));

export const CopyRightStyling = (theme) => ({
  fontFamily: "Nunito Sans",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "25px",
  color: "#F4F5EF",
  [theme.breakpoints.down("mobile_large")]: {
    marginTop: "1%",
  },
});

export const SocialMediaIconStyles = {
  width: "24px",
  color: "#F4F5EF",
};
