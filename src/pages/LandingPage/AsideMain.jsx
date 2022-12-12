import React from "react";
import Slider from "../../components/Slider";
import Collections from "./Collections";
import BigSlider from "../../components/BigSlider/BigSlider";
const AsideMain = () => {
  return (
    <>
      <BigSlider />
      <Slider />
      <Collections />
    </>
  );
};

export default AsideMain;
