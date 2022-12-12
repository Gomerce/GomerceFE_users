import React from "react";
import Grid from "@mui/material/Grid";
import Checkout from "./Checkout";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/NeedHelp";
import Wrapper from "../../components/Wrapper/Wrapper";
const CheckoutPayment = () => {
  return (
    <Wrapper>
      <Grid container direction="row" spacing={4} mt={2} mb={3}>
        <Grid item mobile_large={8}>
          <Checkout />
        </Grid>
        <Grid item mobile_large={4}>
          <OrderSummary />
          <NeedHelp />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CheckoutPayment;
