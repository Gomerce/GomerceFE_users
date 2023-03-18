import React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { FilterCover } from "./styles";

const Filters = ({ heading, items }) => {
  var obj = Object.assign(
    {},
    ...items.map((elem) => ({ [elem.item]: elem.isChecked }))
  );
  const [state, setState] = React.useState(obj);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={FilterCover}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">{heading}</FormLabel>
        <FormGroup>
          {Object.entries(state).map((obj) => {
            const key = obj[0];
            const value = obj[1];
            return (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    checked={value}
                    onChange={handleChange}
                    name={key}
                  />
                }
                label={key}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Filters;
