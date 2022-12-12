import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";
import { textStyle } from "../../components/OrderSummary/styles";
import { ActionRow } from "./styles";
import Phone from "../../Assets/Images/phone1.jfif";
import CustomDivider from "../../components/CustomDivider";
const CartItem = () => {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        sx={{ padding: "2%" }}
      >
        <Grid item mobile_large={3}>
          <Box>
            <img src={Phone} alt={Phone} />
          </Box>
        </Grid>
        <Grid
          item
          mobile_large={9}
          container
          direction="row"
          justifyContent={"space-between"}
        >
          <Grid item>
            <Box>
              <Typography variant="p" sx={textStyle} noWrap="true">
                xiamo redmi 10A, 6.53" 3GB+64GB, 13.0MP, 5000mAh
              </Typography>
              <Typography variant="p" sx={textStyle}>
                4g LTE, Dual sim - graphite grey
              </Typography>
              <ActionRow>
                <FormControl
                  sx={{ width: "86px", marginRight: "2%" }}
                  size="small"
                >
                  <InputLabel>Qty:</InputLabel>
                  <Select
                    size="small"
                    value={quantity}
                    label="Qty:"
                    defaultValue={1}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button variant="text">delete</Button>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button variant="text">save for later</Button>
              </ActionRow>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="p" noWrap="true" sx={{ fontSize: "20px" }}>
                <b>$ 29.21</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
    </Box>
  );
};

export default CartItem;
