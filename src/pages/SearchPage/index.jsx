import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Filters from "./Filters";
import { SideFilters } from "./styles";
import BreadCrumbs from "../../components/BreadCrumbs";
import SearchResultsDisplay from "./SearchResultsDisplay";
import Wrapper from "../../components/Wrapper/Wrapper";
import filters from "../../SetUpData/filter";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
const SearchPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];

  const theme = useTheme();
  const matchesLaptop_1024 = useMediaQuery(
    theme.breakpoints.down("laptop_1024")
  );
  const matchesTablet = useMediaQuery(theme.breakpoints.down("tablet_840"));

  return (
    <Wrapper>
      <BreadCrumbs navigation={navigation} max={matchesLaptop_1024 ? 2 : 8} />
      <Grid
        container
        direction="row"
        spacing={4}
        justifyContent="space-between"
      >
        {matchesTablet ? null : (
          <Grid item tablet_650={3}>
            <Box sx={SideFilters}>
              {filters.map((element, index) => {
                return <Filters {...element} key={index} />;
              })}
            </Box>
          </Grid>
        )}

        <Grid item mobile_0={12} tablet_840={9}>
          <SearchResultsDisplay />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SearchPage;
