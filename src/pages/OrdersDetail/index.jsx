import Typography from "@mui/material/Typography";
import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import { PageHeader } from "./styles";
import Wrapper from "../../components/Wrapper/Wrapper";
import Details from "./DetailsMain";
import DeliverySection from "./DeliverySection";
const OrdersDetail = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Detail", link: "/" },
  ];
  return (
    <Wrapper>
      <PageHeader>
        <Typography variant="h5">Orders detail</Typography>
        <BreadCrumbs navigation={navigation} />
      </PageHeader>
      <DeliverySection />
      <Details />
    </Wrapper>
  );
};

export default OrdersDetail;
