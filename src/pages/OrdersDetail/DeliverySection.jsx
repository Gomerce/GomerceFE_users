import Typography from "@mui/material/Typography";
import React from "react";
import { Delivery, Frame } from "./styles";
import Tracking from "./Tracking";
const DeliverySection = () => {
  return (
    <Delivery>
      <Typography
        variant="body2"
        sx={{ textTransform: "uppercase", fontWeight: "400" }}
      >
        tracking order no: {"28vv178145"}
      </Typography>
      <Frame>
        <Typography variant="body2">
          <b>Shipped via:</b>
          {" lorem ipsum "}
        </Typography>
        <Typography variant="body2" sx={{ margin: "0 2%" }}>
          <b>Status:</b>
          {" Packaging "}
        </Typography>
        <Typography variant="body2">
          <b>Expected delivery date:</b> 01/01/2023
        </Typography>
      </Frame>
      <Tracking />
    </Delivery>
  );
};

export default DeliverySection;
