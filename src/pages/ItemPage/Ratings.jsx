import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Ratings = ({ margin, readOnly }) => {
  const [value, setValue] = useState(2);

  return (
    <Box sx={margin && { margin: margin }}>
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size={"small"}
        sx={{ color: "#1F2839" }}
        readOnly={readOnly}
      />
    </Box>
  );
};

export default Ratings;
