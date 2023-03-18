import React from "react";
import { Banner, BannerImage, InfoSection } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const DisplayCard = ({ title, label, description, image }) => {
  const theme = useTheme();
  const matchesMobile_550 = useMediaQuery(theme.breakpoints.down("mobile_550"));
  return (
    <Banner>
      <BannerImage image={image} />
      <InfoSection>
        <Typography
          variant="h1"
          fontSize={{
            mobile_0: "14px",
            mobile_400: "25px",
            mobile_550: "28px",
            mobile_600: "32px",
          }}
          fontWeight={"700"}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={{
            mobile_0: "14px",
            mobile_550: "22px",
            mobile_600: "28px",
          }}
          fontWeight={"400"}
          mt={"4%"}
          mb={"3%"}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          fontSize={"14px"}
          fontWeight={"400"}
          mb={"5%"}
          sx={{ display: { mobile_0: "none", mobile_550: "inline-block" } }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          size={matchesMobile_550 ? "medium" : "large"}
        >
          shop now
        </Button>
      </InfoSection>
    </Banner>
  );
};

export default DisplayCard;
