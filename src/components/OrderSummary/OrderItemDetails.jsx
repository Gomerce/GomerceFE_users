import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Phone from "../../Assets/Images/phone1.jfif";
import Typography from "@mui/material/Typography";
import { textStyle } from "./styles";
import CustomDivider from "../CustomDivider";
import { ListItem } from "../../pages/CheckoutDelivery/styles";
const OrderItemDetails = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item mobile_large={3}>
          <Box>
            <img src={Phone} alt={Phone} />
          </Box>
        </Grid>
        <Grid item mobile_large={9}>
          <ListItem>
            <Typography variant="p" sx={textStyle} noWrap>
              Smart 6, 6.6", (2 gb ram + 32 gb rom),500mah
            </Typography>
            <Typography variant="p" sx={textStyle}>
              3g - black
            </Typography>
            <Typography variant="p" sx={textStyle}>
              $$$$
            </Typography>
            <Typography variant="p" sx={textStyle}>
              Qty - 1
            </Typography>
          </ListItem>
        </Grid>
      </Grid>
      <CustomDivider />
    </>
  );
};

export default OrderItemDetails;
