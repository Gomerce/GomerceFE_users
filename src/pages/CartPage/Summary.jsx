import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import CustomDivider from "../../components/CustomDivider";

import { CustomSummary, Row } from "./styles";

const Summary = () => {
  return (
    <CustomSummary>
      <Typography
        variant="h6"
        fontWeight={400}
        fontSize={"24px"}
        sx={{ textAlign: { mobile_0: "center", tablet_600: "inherit" } }}
      >
        Cart Summary
      </Typography>
      <CustomDivider />
      <Row mt={2} mb={1}>
        <Box>
          <Typography variant="body2">Subtotal (2 items)</Typography>
        </Box>
        <Box>
          <Typography variant="body2" fontSize={"24px"} fontWeight={700}>
            <b>$ 59.9</b>
          </Typography>
        </Box>
      </Row>
      <Button variant="contained" fullWidth={"true"}>
        proceed to checkOut
      </Button>
    </CustomSummary>
  );
};

export default Summary;
