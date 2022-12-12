import Grid from "@mui/material/Grid";
import React from "react";
import CartMain from "./CartMain";
import { CustomSection } from "./styles";
import Summary from "./Summary";
import Wrapper from "../../components/Wrapper/Wrapper";
import RecommendedItems from "../../components/RecommendedItems";

const Cart = () => {
  return (
    <Wrapper>
      <CustomSection mt={3}>
        <Grid
          container
          direction="row"
          mt={2}
          mb={3}
          justifyContent="space-between"
        >
          <Grid item mobile_large={7}>
            <CartMain />
          </Grid>
          <Grid item mobile_large={4}>
            <Summary />
          </Grid>
        </Grid>
      </CustomSection>
      <RecommendedItems />
    </Wrapper>
  );
};

export default Cart;
