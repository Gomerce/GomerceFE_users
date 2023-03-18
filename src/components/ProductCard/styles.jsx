import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
export const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2%",
  width: "200px",
  filter: "drop-shadow(0px 2px 2px rgba(142, 142, 142, 0.1))",
  borderRadius: "4px",
  [theme.breakpoints.between("laptop_1024", "laptop_1280")]: {
    width: "165px",
  },

  [theme.breakpoints.down("mobile_550")]: {
    width: "155px",
  },
}));

export const Image = styled(Box)(({ image, theme }) => ({
  width: "200px",
  height: "200px",
  objectFit: "contain",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  [theme.breakpoints.between("laptop_1024", "laptop_1280")]: {
    width: "165px",
  },
  [theme.breakpoints.down("mobile_550")]: {
    width: "155px",
  },
}));

export const Details = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2%",
}));
