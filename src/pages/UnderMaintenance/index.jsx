import React from "react";
import { Container, Wrap, Image } from "./styles";
import maintenancePage from "../../assets/images/page-under-maintenance.png";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PageUnderMaintenance = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Container>
        <Image src={maintenancePage} alt={maintenancePage} />
        <Typography
          variant="body1"
          fontSize={{ mobile_0: 30, mobile_393: 40 }}
          fontWeight={400}
          mb={{ mobile_0: 0, mobile_393: 1 }}
        >
          Under maintenance
        </Typography>
        <Box
          width={{ mobile_0: "100%", tablet_600: "419px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          margin={"0 auto"}
        >
          <Typography variant="caption" fontSize={12} fontWeight={400} mb={1}>
            This page is under maintenance. Please try again after 30 minutes
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => navigate("/")}>
          take me back to homepage
        </Button>
      </Container>
    </Wrap>
  );
};

export default PageUnderMaintenance;
