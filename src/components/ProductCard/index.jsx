import React from "react";
import Typography from "@mui/material/Typography";
import { CardBox, Image, Details } from "./styles";
import Button from "@mui/material/Button";
function ProductCard({ name, image, description, price }) {
  return (
    <CardBox>
      <Image image={image} />
      <Details>
        <Typography
          variant="body2"
          fontWeight={400}
          textTransform="capitalize"
          mt={"5%"}
          mb={"5%"}
        >
          {description.substring(0, 17) + "..."}
        </Typography>
        <Typography variant="h6" fontWeight={600} fontSize="16px" mb={"3%"}>
          {`$ ${price}`}
        </Typography>
        <Button variant="outlined" fullWidth>
          Add to Cart
        </Button>
      </Details>
    </CardBox>
  );
}

export default ProductCard;
