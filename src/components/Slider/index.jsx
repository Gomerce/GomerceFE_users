import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import ProductCard from "../ProductCard";
import cards from "../../SetUpData/sliderData";
// Swiper CSS
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

SwiperCore.use([Navigation, A11y]);

const Slider = () => {
  return (
    <div className="container">
      <h4 className="category">{cards.category}</h4>
      <div className="slider_container">
        <Swiper
          navigation={true}
          grabCursor={true}
          modules={[Navigation, A11y]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {cards.data.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard
                  name={card.name}
                  image={card.image}
                  price={card.price}
                  description={"Item description"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
