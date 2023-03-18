import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Wrapper from "../../components/Wrapper/Wrapper";
import Grid from "@mui/material/Grid";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/NeedHelp";
import { Container, Navigate } from "./styles";
import CustomStepper from "./Stepper";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutAddress from "./CheckoutAddress";
import { useMediaQuery } from "@mui/material";

const steps = [<CheckoutAddress />, <CheckoutDelivery />, <CheckoutPayment />];
const titles = ["Address details", "Delivery method", "Payment method"];
const Checkout = () => {
  const theme = useTheme();
  const matchesMobile_360Down = useMediaQuery(
    theme.breakpoints.down("mobile_360")
  );
  const matchesTablet_600Down = useMediaQuery(
    theme.breakpoints.down("tablet_600")
  );
  const topRef = useRef();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const maxSteps = steps.length;
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Wrapper>
      <div ref={topRef} />
      <Grid
        container
        direction={{ mobile_0: "column", laptop_1024: "row" }}
        spacing={5}
        mt={2}
        mb={3}
      >
        <Grid item mobile_0={12} tablet_650={8}>
          <Typography
            variant="h5"
            fontWeight={400}
            fontSize={"24px"}
            align={matchesTablet_600Down ? "center" : "inherit"}
          >
            Checkout
          </Typography>

          {matchesTablet_600Down ? (
            <Box
              sx={{
                width: "100%",
                margin: "1em 0 0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={"14px"}
                variant="caption"
                align="center"
              >
                {`${activeStep + 1}. ` + titles[activeStep]}
              </Typography>
            </Box>
          ) : (
            <CustomStepper
              activeStep={activeStep}
              completed={completed}
              titles={titles}
            />
          )}
          <Container>
            <Box sx={{ width: "100%" }}>{steps[activeStep]}</Box>
            <Navigate>
              <Button
                size={matchesMobile_360Down ? "small" : "medium"}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
              <Button
                size={matchesMobile_360Down ? "small" : "medium"}
                variant="contained"
                onClick={
                  activeStep === maxSteps - 1 ? console.log("") : handleNext
                }
              >
                {activeStep === maxSteps - 1
                  ? "submit order"
                  : "save and continue"}
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            </Navigate>
          </Container>
        </Grid>

        <Grid
          item
          mobile_0={12}
          tablet_650={4}
          mt={{ mobile_0: "1em", tablet_600: "" }}
        >
          <OrderSummary />
          <NeedHelp />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Checkout;
