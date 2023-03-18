import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import CustomDivider from "../../components/CustomDivider";
import CartItem from "./CartItem";
import { CustomCartMain } from "./styles";

const CartMain = () => {
  return (
    <CustomCartMain>
      <Typography
        variant="h6"
        fontWeight={{ mobile_0: "600", laptop_1024: "400" }}
        fontSize={{ mobile_0: "16px", tablet_600: "24px", laptop_1024: "32px" }}
        sx={{ textAlign: { mobile_0: "center", tablet_600: "inherit" } }}
      >
        Shopping Cart 2
      </Typography>
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
