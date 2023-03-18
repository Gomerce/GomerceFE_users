import React from "react";
import ItemsCarousel from "../ItemsCarousel";
import { Container } from "./style";
import { Typography } from "@mui/material";

const RecommendedItems = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        fontSize={{ mobile_0: "14px", tablet_600: "19px", laptop_1024: "24px" }}
        fontWeight={{
          mobile_0: "700",
          laptop_1024: "400",
        }}
      >
        Recommended Items
      </Typography>
      <ItemsCarousel />
    </Container>
  );
};

export default RecommendedItems;
