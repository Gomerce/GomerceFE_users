import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Wrapper } from "./styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const NeedHelp = () => {
  const theme = useTheme();
  const matchesLaptop_1024Down = useMediaQuery(
    theme.breakpoints.down("laptop_1024")
  );
  return (
    <Box mt={3} sx={{ width: "100%" }}>
      <Typography
        variant="h3"
        fontWeight={400}
        fontSize={"24px"}
        align={matchesLaptop_1024Down ? "center" : "inherit"}
      >
        Need help?
      </Typography>
      <Wrapper>
        <Typography variant="body1">
          Contact an expert to support you
        </Typography>
        <Button variant="outlined" disableElevation fullWidth size="large">
          reach out
        </Button>
      </Wrapper>
    </Box>
  );
};

export default NeedHelp;
