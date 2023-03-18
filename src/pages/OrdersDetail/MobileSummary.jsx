import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const MobileSummary = ({ title, quantity, price, image }) => {
  return (
    <Card
      sx={{
        width: { mobile_0: "100%" },
        padding: "3%",
        margin: "1.5em auto",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="170" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={400}
            fontSize={"16px"}
            color={"#27273F"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            fontSize={"16px"}
            fontWeight={400}
            color={"#27273F"}
          >
            {`Quantity: ${quantity}`}
          </Typography>
          <Typography
            variant="body2"
            fontSize={"16px"}
            fontWeight={400}
            color={"#27273F"}
          >
            {`Price: $ ${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MobileSummary;
