import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Banner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "300px",
  alignItems: "center",
  padding: "0 5%",
  justifyContent: "space-between",
  marginLeft: "0.6em",
  [theme.breakpoints.down("tablet_840")]: {
    padding: "0 2%",
  },
  [theme.breakpoints.down("mobile_550")]: {
    height: "200px",
  },
}));

export const BannerImage = styled(Box)(({ image, theme }) => ({
  width: "354px",
  height: "282px",
  objectFit: "scale-down",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  backgroundColor: "#fff",

  [theme.breakpoints.between("mobile_400", "tablet_600")]: {
    width: "320px",
    height: "180.88px",
  },

  [theme.breakpoints.down("mobile_400")]: {
    width: "180px",
    height: "142.88px",
  },
}));

export const InfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "487px",
  height: "244px",
  [theme.breakpoints.only("laptop_1280")]: {
    marginLeft: "4%",
  },

  [theme.breakpoints.between("mobile_400", "tablet_800")]: {
    width: "360px",
    height: "230.88px",
  },
  [theme.breakpoints.between("tablet_840", "laptop_1024")]: {
    marginLeft: "4%",
  },

  [theme.breakpoints.down("tablet_840")]: {
    marginLeft: "4%",
  },

  [theme.breakpoints.down("mobile_400")]: {
    width: "135px",
    height: "128px",
  },
  [theme.breakpoints.down("mobile_375")]: {
    marginLeft: "4%",
  },
}));

export const Arrow = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "45.23px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: "5",
  top: "45%",

  cursor: "pointer",
  [theme.breakpoints.up("tablet_840")]: {
    display: "flex",
  },
}));
