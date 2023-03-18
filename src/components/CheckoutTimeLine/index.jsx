import React from "react";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CustomBreadcrumbDivider from "./CustomBreadcrumbDivider";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { checkoutButtonStyle } from "./styles";

const CustomCheckoutBreadcrumb = ({ address, payment, delivery }) => {
  const breadcrumbs = [
    <Button
      key="1"
      size="small"
      startIcon={address ? <CheckCircleIcon /> : "1."}
      sx={checkoutButtonStyle}
    >
      address details
    </Button>,
    <Button
      key="2"
      size="small"
      startIcon={delivery ? <CheckCircleIcon /> : "2."}
      sx={checkoutButtonStyle}
    >
      delivery method
    </Button>,
    <Button
      key="3"
      size="small"
      startIcon={payment ? <CheckCircleIcon /> : "3."}
      sx={checkoutButtonStyle}
    >
      payment method
    </Button>,
  ];
  return (
    <Stack direction="row" mt={2.5} mb={2}>
      <Breadcrumbs
        separator={<CustomBreadcrumbDivider />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomCheckoutBreadcrumb;
