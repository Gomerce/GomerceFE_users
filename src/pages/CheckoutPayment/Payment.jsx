import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
import CustomCheckoutBreadcrumb from "../../components/CheckoutTimeLine";
import summary from "../../SetUpData/summaryData";
import CustomDivider from "../../components/CustomDivider";
import { Row, Summary, textStyle, Wrapper } from "../CheckoutDelivery/styles";
const Payment = () => {
  const [payment, setPayment] = useState("");

  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  return (
    <>
      <Typography variant="h5">Checkout</Typography>
      <CustomCheckoutBreadcrumb address={true} delivery={true} />
      <Wrapper>
        <Typography variant="subtitle2">
          How do you want to pay your order?
        </Typography>

        <Typography variant="subtitle2">Select payment option</Typography>
        <Box mt={1} mb={1} sx={{ width: "260px" }}>
          <TextField
            select
            onChange={handleChange}
            value={payment}
            fullWidth
            size="small"
          >
            <MenuItem value={"master card"}>Master Card</MenuItem>
            <MenuItem value={"visa card"}>Visa Card</MenuItem>
            <MenuItem value={"paypal"}>Paypal</MenuItem>dth
          </TextField>
        </Box>
        <CustomDivider />
        <Typography variant="subtitle2" mt={2} mb={2}>
          Do you have a voucher?
        </Typography>
        <Box
          sx={{
            width: "410px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "272px" }}>
            <TextField size="small" fullWidth />
          </Box>
          <Button size="medium" variant="outlined">
            add voucher
          </Button>
        </Box>
        <CustomDivider />
        <Summary>
          {summary.map((row, index) => {
            const { label, value } = row;

            return index === 4 ? (
              <>
                <CustomDivider />
                <Row key={index}>
                  <Box>
                    <Typography sx={textStyle}>{label}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={textStyle}>{`$ ${value}`}</Typography>
                  </Box>
                </Row>
              </>
            ) : (
              <Row key={index}>
                <Box>
                  <Typography sx={textStyle}>{label}</Typography>
                </Box>
                <Box>
                  <Typography sx={textStyle}>{`$ ${value}`}</Typography>
                </Box>
              </Row>
            );
          })}
        </Summary>
        <Button variant="contained">submit order</Button>
      </Wrapper>
    </>
  );
};

export default Payment;
