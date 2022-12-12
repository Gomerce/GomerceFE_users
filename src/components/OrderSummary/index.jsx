import React from "react";
import { Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import OrderItemDetails from "./OrderItemDetails";
import CustomDivider from "../CustomDivider";
import Box from "@mui/material/Box";

const OrderSummary = () => {
  return (
    <>
      <Typography variant="h5">Order summary</Typography>
      <Wrapper>
        <Typography variant="subtitle2">Your Order (2 items)</Typography>
        <OrderItemDetails />
        <OrderItemDetails />
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="space-between"
        >
          <Grid item mobile_large={6}>
            <Box>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"left"}>
                Subtotal
              </Typography>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"left"}>
                VAT
              </Typography>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"left"}>
                Total
              </Typography>
            </Box>
          </Grid>
          <Grid item mobile_large={6}>
            <Box>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"right"}>
                $$$$$$
              </Typography>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"right"}>
                $$$$$$
              </Typography>
              <Typography variant="subtitle2" mt={1.5} mb={1.5} align={"right"}>
                $$$$$$
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <CustomDivider />
        <Button variant="outlined" disableElevation fullWidth size="large">
          Modify cart
        </Button>
      </Wrapper>
    </>
  );
};

export default OrderSummary;
