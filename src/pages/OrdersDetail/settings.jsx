import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LeftArrow from "../../components/Arrow/LeftArrow";
import RightArrow from "../../components/Arrow/RightArrow";
const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <LeftArrow
      sx={{ display: { mobile_0: "flex" }, top: "30%" }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </LeftArrow>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <RightArrow
      sx={{ display: { mobile_0: "flex" }, top: "30%" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </RightArrow>
  );
};

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};
