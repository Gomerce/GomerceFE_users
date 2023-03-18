import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerInfo } from "../../SetUpData/banner";
import DisplayCard from "./DisplayCard";
import settings from "./settings";
import Box from "@mui/material/Box";
const BigSlider = () => {
  return (
    <Box
      sx={{
        margin: "3% 0 5%",
        boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
        backgroundColor: "yellow",
      }}
    >
      <Slider {...settings}>
        {bannerInfo.map((item, index) => {
          return <DisplayCard key={index} {...item} />;
        })}
      </Slider>
    </Box>
  );
};

export default BigSlider;
