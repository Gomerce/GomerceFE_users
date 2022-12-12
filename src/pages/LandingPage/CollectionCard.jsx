import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CollectionCardStyle } from "./styles";
import Typography from "@mui/material/Typography";
const CollectionCard = ({ title, image, link }) => {
  return (
    <Card sx={CollectionCardStyle}>
      <Typography variant="h6">{title}</Typography>
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardActions disableSpacing>
        <Button variant="outlined">See More</Button>
      </CardActions>
    </Card>
  );
};

export default CollectionCard;
