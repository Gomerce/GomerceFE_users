import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchInput from "../SearchInput";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { customAppBarStyle, toolBarStyles, StyledButtonGroup } from "./styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import MenuSearchInput from "../MobileSearchInput";
const PrimarySearchAppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchesLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
  const matchesMobileLarge = useMediaQuery(
    theme.breakpoints.up("mobile_large")
  );
  return (
    <AppBar position="sticky" sx={customAppBarStyle}>
      <Toolbar sx={toolBarStyles}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {matchesLaptop && (
            <MenuIcon
              color="black"
              sx={{ marginRight: "8px", cursor: "pointer" }}
            />
          )}
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              color: "#1F2839",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Gomerce
          </Typography>
        </Box>

        {matchesMobileLarge && <SearchInput />}
        <StyledButtonGroup>
          {!matchesLaptop ? (
            <>
              <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
                Wishlist
              </Button>
              <Button variant="outlined" startIcon={<Person3OutlinedIcon />}>
                Account
              </Button>
              <Button
                variant="outlined"
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Cart
              </Button>
            </>
          ) : (
            <>
              <IconButton>
                <Person3OutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </>
          )}
        </StyledButtonGroup>
      </Toolbar>
      {!matchesMobileLarge && <MenuSearchInput />}
    </AppBar>
  );
};

export default PrimarySearchAppBar;
