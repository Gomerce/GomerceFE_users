import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { StyledSelect } from "./CustomSelect";
const CustomSelect = (props) => {
  const { showBackground, showBorder, width, label, margin, items } = props;
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ width: width, margin: margin ? margin : "" }}>
      <StyledSelect
        select
        label={label ? label : ""}
        fullWidth
        margin="dense"
        size="small"
        showBackground={showBackground}
        showBorder={showBorder}
      >
        {items.map((item, index) => {
          return (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </Box>
  );
};
export default CustomSelect;
