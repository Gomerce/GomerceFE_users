import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link } from "react-router-dom";
import PageContainer from "./Pagination";
const AppPagination = ({ count, page }) => {
  return (
    <Pagination
      sx={PageContainer}
      count={count}
      page={page}
      shape={"rounded"}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/products/search?page=${item.page}`}
        />
      )}
    />
  );
};

export default AppPagination;
