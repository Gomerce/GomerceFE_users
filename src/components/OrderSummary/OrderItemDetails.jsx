import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Phone from "../../assets/images/phone1.jfif";
import Typography from "@mui/material/Typography";
import CustomDivider from "../CustomDivider";
import { ListItem } from "./styles";
const OrderItemDetails = () => {
  return (
    <>
      <Grid container direction="row" justifyContent={"space-between"}>
        <Grid item mobile_0={3}>
          <Box>
            <img src={Phone} alt={Phone} />
          </Box>
        </Grid>
        <Grid item mobile_0={7} mobile_375={8} tablet_600={9}>
          <ListItem>
            <Typography variant="p" fontSize={"14px"} fontWeight={400}>
              Smart 6, 6.6", (2 gb ram + 32 gb rom),500mah
            </Typography>
            <Typography variant="p" fontSize={"14px"} fontWeight={400}>
              3g - black
            </Typography>
            <Typography variant="p" fontSize={"14px"} fontWeight={400}>
              $$$$
            </Typography>
            <Typography variant="p" fontSize={"14px"} fontWeight={400}>
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
