import React from "react";
import { Card, Image } from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
const CollectionCard = ({ title, image, link }) => {
  const theme = useTheme();
  const matchesMobile_450 = useMediaQuery(theme.breakpoints.up("mobile_450"));
  return (
    <Card>
      <Typography variant="h6" fontSize={matchesMobile_450 ? "18.75" : "16px"}>
        {title}
      </Typography>
      <Image image={image} alt={title} />
      <Button
        variant="outlined"
        size={matchesMobile_450 ? "small" : "medium"}
        fullWidth={matchesMobile_450 ? false : true}
        sx={{ margin: matchesMobile_450 ? "0" : "4% 0 2%" }}
      >
        See More
      </Button>
    </Card>
  );
};

export default CollectionCard;
