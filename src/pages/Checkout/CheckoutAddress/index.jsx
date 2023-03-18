import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Group, InputGroup } from "./styles";
const CheckoutAddress = () => {
  const [pickupStation, setPickUpStation] = useState("");

  const handleChange = (event) => {
    setPickUpStation(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth>
        <Typography variant="subtitle1" mt={3} mb={3}>
          Address details
        </Typography>
        <Box
          sx={{
            display: "Flex",
            flexDirection: { mobile_0: "column", tablet_600: "row" },
            alignItems: { mobile_0: "flex-start", tablet_600: "center" },
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Box mr={7}>
            <Typography variant="subtitle2" mt={1.2} mb={2}>
              Firstname
            </Typography>
            <Box sx={{ width: { mobile_0: "100%", mobile_360: "272px" } }}>
              <TextField size="small" fullWidth />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" mt={1.2} mb={2}>
              Lastname
            </Typography>
            <Box sx={{ width: { mobile_0: "100%", mobile_360: "272px" } }}>
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

            <TextField
              // width={{ mobile_0: "10px", tablet_600: "260px" }}
              size="small"
              fullWidth
            />
          </Box>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Delivery address
          </Typography>
          <InputGroup>
            <TextField
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={2}
            />
          </InputGroup>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Additional info
          </Typography>
          <InputGroup>
            <TextField
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={2}
            />
          </InputGroup>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            Region/State
          </Typography>
          <InputGroup>
            <TextField select size="small" fullWidth>
              <MenuItem value={"london"}>London</MenuItem>
              <MenuItem value={"abuja"}>Abuja</MenuItem>
              <MenuItem value={"ghana"}>Ghana</MenuItem>
            </TextField>
          </InputGroup>
        </Group>
        <Group>
          <Typography variant="subtitle2" mt={1.2} mb={2}>
            City
          </Typography>
          <InputGroup>
            <TextField select size="small" fullWidth>
              <MenuItem value={"london"}>London</MenuItem>
              <MenuItem value={"abuja"}>Abuja</MenuItem>
              <MenuItem value={"ghana"}>Ghana</MenuItem>
            </TextField>
          </InputGroup>
        </Group>
      </FormControl>
    </>
  );
};

export default CheckoutAddress;
