import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ItemImage from "./ItemImage";
import Ratings from "./Ratings";
import CustomDivider from "../../components/CustomDivider";
import {
  Details,
  DetailsWrap,
  IconsWrapper,
  ItemDetails,
  ShareSection,
} from "./styles";
const DetailsMain = () => {
  return (
    <Details>
      <Grid
        container
        direction={{ mobile_0: "column", laptop_1024: "row" }}
        mt={2}
        mb={3}
        justifyContent="space-between"
      >
        <Grid item mobile_0={12} laptop_1024={4}>
          <ItemImage />
        </Grid>
        <Grid item mobile_0={12} laptop_1024={8}>
          <ItemDetails>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body2"
                  display={"flex"}
                  flexDirection={{ mobile_0: "column", mobile_550: "row" }}
                >
                  Infinix Smart 6,6.6", 2GB RAM, 5000mAh, Polar Black
                </Typography>
                <IconButton
                  size="small"
                  disableRipple
                  sx={{ marginRight: { mobile_0: "5px", mobile_550: "0" } }}
                >
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="caption" sx={{ margin: "2% 0" }}>
                Brand: {"Infinix"} Similar products to infinix
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Ratings readOnly={true} /> &nbsp;&nbsp;
                <Typography variant="caption" noWrap>
                  from {"27"} verified viewers
                </Typography>
              </Box>
              <CustomDivider />
            </Box>
            <DetailsWrap>
              <Typography
                variant="body2"
                sx={{ fontSize: "24px", fontWeight: "600" }}
              >
                ${"10.99"}
              </Typography>
              <Typography
                variant="caption"
                sx={{ margin: "2% 0", fontSize: "12px" }}
              >
                In Stock
              </Typography>
              <Typography variant="caption">
                + shipping from {"---"} to {"---"}
              </Typography>
              <Box mt={2} mb={1}>
                <Button
                  variant="contained"
                  fullWidth={false}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to cart
                </Button>
              </Box>
              <CustomDivider />
            </DetailsWrap>
            <ShareSection>
              <Typography variant="body2">Share this product</Typography>
              <IconsWrapper>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </IconsWrapper>
            </ShareSection>
          </ItemDetails>
        </Grid>
      </Grid>
    </Details>
  );
};

export default DetailsMain;
