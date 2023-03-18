import React from "react";
import { Container, Wrap, Image } from "./styles";
import pageNotFound from "../../assets/images/page-not-found.png";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Container>
        <Image src={pageNotFound} alt={pageNotFound} />
        <Typography
          variant="body1"
          fontSize={{ mobile_0: 30, mobile_393: 40 }}
          fontWeight={400}
          mb={{ mobile_0: 0, mobile_393: 1 }}
        >
          Nothing to see here
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
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Typography>
        </Box>
        <Button variant="contained" onClick={() => navigate("/")}>
          take me back to homepage
        </Button>
      </Container>
    </Wrap>
  );
};

export default PageNotFound;
