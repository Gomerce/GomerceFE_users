import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import CustomDivider from "../../components/CustomDivider";
import CartItem from "./CartItem";
import { CustomCartMain } from "./styles";
const CartMain = () => {
  return (
    <CustomCartMain>
      <Typography variant="h6">Shopping Cart 2</Typography>
      <CustomDivider />
      <CartItem />
      <CartItem />
      <Box>
        <Typography variant="body1" align="right">
          Subtotal (2 items): <b>$59.45</b>
        </Typography>
      </Box>
    </CustomCartMain>
  );
};

export default CartMain;
