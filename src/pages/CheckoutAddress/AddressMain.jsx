import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CustomCheckoutBreadcrumb from "../../components/CheckoutTimeLine";
import { Group, Wrapper } from "./styles";

const AddressMain = () => {
  const [pickupStation, setPickUpStation] = useState("");

  const handleChange = (event) => {
    setPickUpStation(event.target.value);
  };
  return (
    <Wrapper>
      <Typography variant="h5">Checkout</Typography>
      <CustomCheckoutBreadcrumb />
      <FormControl fullWidth>
        <Typography variant="subtitle1" mt={3} mb={3}>
          Address details
        </Typography>
        <Box
          sx={{
            display: "Flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box mr={7}>
            <Typography variant="subtitle2" mt={1.2} mb={2}>
              Firstname
            </Typography>
            <Box sx={{ width: "272px" }}>
              <TextField size="small" fullWidth />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" mt={1.2} mb={2}>
              Lastname
            </Typography>
            <Box sx={{ width: "272px" }}>
              <TextField size="small" fullWidth />
            </Box>
          </Box>
        </Box>

        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Mobile Number
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "2% 0",
            }}
          >
            <Box sx={{ width: "100px", marginRight: "2%" }}>
              <TextField
                select
                onChange={handleChange}
                value={pickupStation}
                fullWidth
                size="small"
                variant="outlined"
              >
                <MenuItem value={"london"}>London</MenuItem>
                <MenuItem value={"abuja"}>Abuja</MenuItem>
                <MenuItem value={"ghana"}>Ghana</MenuItem>
              </TextField>
            </Box>

            <TextField sx={{ width: "272px" }} size="small" fullWidth />
          </Box>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Delivery address
          </Typography>
          <Box sx={{ width: "500px" }}>
            <TextField
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={2}
            />
          </Box>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Additional info
          </Typography>
          <Box sx={{ width: "500px" }}>
            <TextField
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={2}
            />
          </Box>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Region/State
          </Typography>
          <Box sx={{ width: "500px" }}>
            <TextField select size="small" fullWidth>
              <MenuItem value={"london"}>London</MenuItem>
              <MenuItem value={"abuja"}>Abuja</MenuItem>
              <MenuItem value={"ghana"}>Ghana</MenuItem>
            </TextField>
          </Box>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            City
          </Typography>
          <Box sx={{ width: "500px" }}>
            <TextField select size="small" fullWidth>
              <MenuItem value={"london"}>London</MenuItem>
              <MenuItem value={"abuja"}>Abuja</MenuItem>
              <MenuItem value={"ghana"}>Ghana</MenuItem>
            </TextField>
          </Box>
        </Group>
      </FormControl>
      <Button variant="contained" sx={{ marginTop: "1%" }}>
        save and continue
      </Button>
    </Wrapper>
  );
};

export default AddressMain;
