import React from "react";
import { DetailsMain, InfoWrapper, OrderInfo, ProductSummary } from "./styles";
import { orderInfo } from "../../SetUpData/data_orders";
import SummaryTable from "./SummaryTable";
import CustomDivider from "../../components/CustomDivider";
import Typography from "@mui/material/Typography";
const Details = () => {
  return (
    <DetailsMain>
      <Typography variant="body2">
        <b>Order id: {"#920145"}</b>
      </Typography>
      <InfoWrapper>
        {orderInfo.map((info, index) => {
          const { label, description } = info;
          return (
            <OrderInfo key={index}>
              <Typography variant="caption" mb={1}>
                <b>{label}</b>
              </Typography>
              <Typography variant="caption">{description}</Typography>
            </OrderInfo>
          );
        })}
      </InfoWrapper>
      <CustomDivider />
      <ProductSummary>
        <Typography variant="body2" mt={1} mb={2}>
          <b>Product Summary</b>
        </Typography>
        <SummaryTable />
      </ProductSummary>
    </DetailsMain>
  );
};

export default Details;
