import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";
import summary from "../../../SetUpData/summaryData";
import CustomDivider from "../../../components/CustomDivider";
import { Row, Summary } from "./styles";
const CheckoutPayment = () => {
  const [payment, setPayment] = useState("");
  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  return (
    <>
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
          width: { mobile_0: "100%", tablet_600: "410px" },
          display: "flex",
          flexDirection: { mobile_0: "column", tablet_600: "row" },
          alignItems: { mobile_0: "flex-start", tablet_600: "center" },

          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "272px" }}>
          <TextField size="small" fullWidth />
        </Box>
        <Button
          size="medium"
          variant="outlined"
          sx={{ marginTop: { mobile_0: "1.2em", tablet_600: "0" } }}
        >
          add voucher
        </Button>
      </Box>
      <CustomDivider />
      <Summary>
        {summary.map((row, index) => {
          const { label, value } = row;
          return index === 4 ? (
            <Box key={index}>
              <CustomDivider />
              <Row key={index}>
                <Box>
                  <Typography fontWeight={400} fontSize={"14px"}>
                    {label}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontWeight={400}
                    fontSize={"14px"}
                  >{`$ ${value}`}</Typography>
                </Box>
              </Row>
            </Box>
          ) : (
            <Row key={index}>
              <Box>
                <Typography fontWeight={400} fontSize={"14px"}>
                  {label}
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontWeight={400}
                  fontSize={"14px"}
                >{`$ ${value}`}</Typography>
              </Box>
            </Row>
          );
        })}
      </Summary>
    </>
  );
};

export default CheckoutPayment;
