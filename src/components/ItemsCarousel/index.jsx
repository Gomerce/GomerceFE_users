import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "../../SetUpData/itemsCarousel";
import ProductCard from "../ProductCard";
import { carouselSettings } from "./settings";
const ItemsCarousel = () => {
  return (
    <Slider {...carouselSettings} style={{ padding: "1% 0" }}>
      {items.map((item, index) => {
        return (
          <ProductCard
            sx={{}}
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.desc}
          />
        );
      })}
    </Slider>
  );
};

export default ItemsCarousel;
