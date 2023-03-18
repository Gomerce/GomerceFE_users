import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import {
  FooterContainer,
  FooterContent,
  DividerStyle,
  FooterBottom,
  SocialStack,
  CopyRightStyling,
  SocialMediaIconStyles,
} from "./styles";
import FooterColumn from "./FooterColumn";
import Divider from "@mui/material/Divider";
import footerData from "../../SetUpData/footerColumnData";
import Box from "@mui/material/Box";
// import FloatingBtn from "../FloatingBtn";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Typography
          variant="h6"
          mr={"6%"}
          color={"#F4F5EF"}
          fontWeight={700}
          fontSize={18}
        >
          Gomerce
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: { mobile_0: "wrap", tablet_840: "nowrap" },
            marginTop: { mobile_0: "3%", tablet_840: "0" },
          }}
        >
          {footerData.map((setup) => {
            return (
              <FooterColumn
                key={setup.id}
                title={setup.title}
                links={setup.links}
              />
            );
          })}
        </Box>
      </FooterContent>
      <Divider sx={DividerStyle} />
      <FooterBottom>
        <SocialStack>
          <TwitterIcon sx={SocialMediaIconStyles} />
          <FacebookIcon sx={SocialMediaIconStyles} />
          <InstagramIcon sx={SocialMediaIconStyles} />
        </SocialStack>
        <Typography variant="caption" noWrap sx={CopyRightStyling}>
          &copy; {new Date().getFullYear()} Gomerce
        </Typography>
      </FooterBottom>
      {/* <FloatingBtn /> */}
    </FooterContainer>
  );
};

export default Footer;
