import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { StyledSelect } from "./CustomSelect";
import FormControl from "@mui/material/FormControl";
const CustomSelect = (props) => {
  const { background, border, width, label, margin, items } = props;
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.getAttribute("data-value"));
    // console.log(event.target.getAttribute("data-value"));
  };

  return (
    <Box sx={{ width: width, margin: margin ? margin : "" }}>
      <FormControl fullWidth>
        <StyledSelect
          select
          label={label}
          fullWidth
          margin="dense"
          size="small"
          background={background}
          border={border}
          value={sort}
        >
          {items.map((item, index) => {
            return (
              <MenuItem value={item} key={index} onClick={handleChange}>
                {item}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
export default CustomSelect;
