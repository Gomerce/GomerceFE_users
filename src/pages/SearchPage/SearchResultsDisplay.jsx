import React from "react";
import { ResultContainer, Title, Label } from "./styles";
import CustomSelect from "../../components/CustomSelect";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";
import AppPagination from "../../components/Pagination";
import items from "../../SetUpData/itemsCarousel";
const options = ["color", "size", "brand"];
const SearchResultsDisplay = () => {
  // const page = query.get("page") || 1;

  return (
    <ResultContainer>
      <Title>
        <Label>Displaying {"8"} out 100 results</Label>
        <CustomSelect
          background={"true"}
          border={"false"}
          width={"111px"}
          label="sort by"
          items={options}
        />
      </Title>
      <Grid
        container
        spacing={5}
        mt={2}
        mb={5}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        {items.map((item, index) => (
          <Grid item key={index} sx={{ alignItems: "center" }}>
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.desc}
            />
          </Grid>
        ))}
      </Grid>
      <AppPagination count={10} page={1} mt={3} />
    </ResultContainer>
  );
};

export default SearchResultsDisplay;
