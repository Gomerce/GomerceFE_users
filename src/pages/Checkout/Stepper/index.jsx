import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const CustomStepper = ({ activeStep, titles }) => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "1em 0 0.5em",
      }}
    >
      <Stepper activeStep={activeStep}>
        {titles.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                sx={{ fontWeight: 600, fontSize: "14px" }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
