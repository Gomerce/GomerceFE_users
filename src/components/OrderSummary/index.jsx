import React from "react";
import { Wrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import OrderItemDetails from "./OrderItemDetails";
import CustomDivider from "../CustomDivider";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const OrderSummary = () => {
  const theme = useTheme();
  const matchesLaptop_1024Down = useMediaQuery(
    theme.breakpoints.down("laptop_1024")
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h3"
        fontWeight={400}
        fontSize={"24px"}
        align={matchesLaptop_1024Down ? "center" : "inherit"}
      >
        Order summary
      </Typography>
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
          <Grid item mobile_0={6}>
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
          <Grid item mobile_0={6}>
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
    </Box>
  );
};

export default OrderSummary;
