import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cards from "../../SetUpData/sliderData";
import ProductCard from "../../components/ProductCard";
import SwiperCore, { Navigation, A11y } from "swiper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
SwiperCore.use([Navigation, A11y]);

const RecommendedItems = () => {
  const RecommendedItems = styled(Box)({
    padding: "24px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
    borderRadius: "2px",
    margin: "5% 0",
  });
  return (
    <RecommendedItems>
      <Typography variant="h6" mb={5}>
        Recommended items
      </Typography>
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
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {cards.data.map((card, index) => {
          return (
            <SwiperSlide>
              <ProductCard
                key={index}
                name={card.name}
                image={card.image}
                price={card.price}
                description={"Item description"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </RecommendedItems>
  );
};

export default RecommendedItems;
