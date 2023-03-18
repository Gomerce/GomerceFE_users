import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import tracking from "../../SetUpData/tracking";
import { IconBox, TrackItem } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
const MobileTrackingDisplay = () => {
  return (
    <Box width={"100%"} mt={"2em"} height={"auto"}>
      <Slider
        {...settings}
        style={{
          padding: "1% 0",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          height: "auto",
        }}
      >
        {tracking.map((track, index) => {
          const { icon, text, isChecked } = track;
          return (
            <Box key={index}>
              <TrackItem
                sx={{
                  marginRight: "0.8em",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                }}
              >
                <IconBox
                  sx={{
                    backgroundColor: isChecked ? "#B69D74" : "#F4F5EF",
                    color: isChecked ? "#fff" : "#000",
                  }}
                >
                  {icon}
                </IconBox>
                <Typography
                  variant="body1"
                  fontSize={"14px"}
                  fontWeight={400}
                  align={"center"}
                  mt={2}
                >
                  {text}
                </Typography>
              </TrackItem>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default MobileTrackingDisplay;
