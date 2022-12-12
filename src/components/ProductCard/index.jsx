import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  cardStyles,
  imgStyle,
  priceTag,
  secondSection,
  descriptionTag,
} from "./styles";
import Button from "@mui/material/Button";

function ProductCard({ image, price, description }) {
  return (
    <Card sx={cardStyles} bg={"pink"}>
      <CardMedia component="img" sx={imgStyle} image={image} alt={image} />
      <CardContent sx={secondSection}>
        <Typography variant="body2" sx={descriptionTag}>
          {description.substring(0, 17) + "..."}
        </Typography>
        <Typography variant="h6" sx={priceTag}>
          {`$ ${price}`}
        </Typography>
        <Button variant="outlined">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
