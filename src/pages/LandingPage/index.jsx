import SideNav from "./SideNav";
import AsideMain from "./AsideMain";
import Grid from "@mui/material/Grid";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const LandingPage = () => {
  const theme = useTheme();
  const matchesLaptop = useMediaQuery(theme.breakpoints.down("laptop_1152"));
  return (
    <Wrapper>
      <Grid container direction={{ laptop_1024: "row" }} spacing={1}>
        {!matchesLaptop && (
          <Grid item tablet_650={3}>
            <SideNav />
          </Grid>
        )}
        {matchesLaptop ? (
          <Grid item mobile_0={12}>
            <AsideMain />
          </Grid>
        ) : (
          <Grid item mobile_0={9}>
            <AsideMain />
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default LandingPage;
