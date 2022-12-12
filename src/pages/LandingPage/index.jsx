import SideNav from "./SideNav";
import AsideMain from "./AsideMain";
import Grid from "@mui/material/Grid";
import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
const LandingPage = () => {
  return (
    <Wrapper>
      <Grid container direction="row" spacing={1}>
        <Grid item mobile_large={3}>
          <SideNav />
        </Grid>
        <Grid item mobile_large={9}>
          <AsideMain />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default LandingPage;
