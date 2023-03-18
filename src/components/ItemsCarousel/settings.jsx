import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Arrow from "./style";
const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <Arrow sx={{ left: "-2%" }} onClick={onClick}>
      <ArrowBackIosNewIcon />
    </Arrow>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Arrow sx={{ right: "-2%" }} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Arrow>
  );
};

export const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};
