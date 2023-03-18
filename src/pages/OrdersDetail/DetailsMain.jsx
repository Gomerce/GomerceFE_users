import React from "react";
import { DetailsMain, InfoWrapper, OrderInfo, ProductSummary } from "./styles";
import { orderInfo } from "../../SetUpData/data_orders";
import SummaryTable from "./SummaryTable";
import CustomDivider from "../../components/CustomDivider";
import Typography from "@mui/material/Typography";
import MobileSummary from "./MobileSummary";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { summary } from "../../SetUpData/summary";

const Details = () => {
  const theme = useTheme();
  const matchesLaptop_1024Down = useMediaQuery(
    theme.breakpoints.down("tablet_600")
  );
  return (
    <DetailsMain>
      <Typography variant="body2" fontSize={"14px"} fontWeight={700}>
        <b>Order id: {"#920145"}</b>
      </Typography>
      <InfoWrapper>
        {orderInfo.map((info, index) => {
          const { label, description } = info;
          return (
            <OrderInfo key={index}>
              <Typography
                variant="caption"
                mb={1}
                fontSize={"14px"}
                fontWeight={400}
              >
                <b>{label}</b>
              </Typography>
              <Typography variant="caption" fontSize={"12px"} fontWeight={400}>
                {description.substring(0, 85) + "..."}
              </Typography>
            </OrderInfo>
          );
        })}
      </InfoWrapper>
      <CustomDivider />
      <ProductSummary>
        <Typography
          variant="body2"
          mt={1}
          mb={2}
          fontSize={"16px"}
          fontWeight={700}
        >
          <b>Product Summary</b>
        </Typography>

        {matchesLaptop_1024Down ? (
          summary.map((item, index) => <MobileSummary key={index} {...item} />)
        ) : (
          <SummaryTable />
        )}
      </ProductSummary>
    </DetailsMain>
  );
};

export default Details;
