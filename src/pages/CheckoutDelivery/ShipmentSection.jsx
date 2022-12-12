import React from "react";
import { ListItem, ShippingSection } from "./styles";
import Typography from "@mui/material/Typography";
import { CustomDivider } from "../../components/CustomDivider/styles";
const ShipmentSection = () => {
  return (
    <>
      <Typography variant="subtitle2" mt={2} mb={2}>
        Deliver between Tuesday 20 Sep and Thursday 22 Sep
      </Typography>
      <ShippingSection>
        <Typography variant="p">Shipping items</Typography>
        <CustomDivider />
        <ListItem>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Shipment 1 of 3
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Laptop Bag USB Back Pack Antitheft Bag
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Qty - 1
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Delivered by ---
          </Typography>
          <CustomDivider />
        </ListItem>
        <ListItem>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Shipment 1 of 3
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Laptop Bag USB Back Pack Antitheft Bag
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Qty - 1
          </Typography>
          <Typography variant="caption" mt={0.5} mb={0.5}>
            Delivered by ---
          </Typography>
          <CustomDivider />
        </ListItem>
      </ShippingSection>
    </>
  );
};

export default ShipmentSection;
