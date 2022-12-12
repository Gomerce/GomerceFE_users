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
        direction="row"
        mt={2}
        mb={3}
        justifyContent="space-between"
      >
        <Grid item mobile_large={4}>
          <ItemImage />
        </Grid>
        <Grid item mobile_large={8}>
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
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" noWrap>
                  Infinix Smart 6,6.6", 2GB RAM, 5000mAh, Polar Black
                </Typography>
                <IconButton size="small" disableRipple>
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Typography variant="caption" sx={{ margin: "2% 0" }} noWrap>
                Brand: {"Infinix"} Similar products to infinix
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                noWrap
              >
                ${"10.99"}
              </Typography>
              <Typography
                variant="caption"
                sx={{ margin: "2% 0", fontSize: "12px" }}
                noWrap
              >
                In Stock
              </Typography>
              <Typography variant="caption" noWrap>
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
            </DetailsWrap>
            <CustomDivider />
            <ShareSection>
              <Typography variant="body2" noWrap>
                Share this product
              </Typography>
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
