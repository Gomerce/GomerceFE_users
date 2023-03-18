import React from "react";
import { Container, Wrap, Image } from "./styles";
import pageInternalSeverError from "../../assets/images/internal-server-error.png";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PageInternalSeverError = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Container>
        <Image src={pageInternalSeverError} alt={pageInternalSeverError} />
        <Typography
          variant="body1"
          fontSize={{ mobile_0: 25, mobile_393: 30, tablet_600: 40 }}
          fontWeight={400}
          mb={{ mobile_393: 1 }}
        >
          Something bad just happened...
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
            Our servers could not handle your request. Don't worry, our
            development team was already notified. Try refreshing the page.
            <br />
            Refresh the page
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            window.location.reload();
          }}
        >
          refresh page
        </Button>
      </Container>
    </Wrap>
  );
};

export default PageInternalSeverError;
