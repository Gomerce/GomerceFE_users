import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import tracking from "../../SetUpData/tracking";
import { CustomHr, IconBox, TrackDisplay, TrackItem } from "./styles";
const Tracking = () => {
  return (
    <TrackDisplay>
      {tracking.map((track, index) => {
        const { icon, text, isChecked } = track;
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TrackItem>
              <IconBox
                key={index}
                sx={{
                  backgroundColor: isChecked ? "#B69D74" : "#F4F5EF",
                  color: isChecked ? "#fff" : "#000",
                }}
              >
                {icon}
              </IconBox>
              {index === tracking.length - 1 ? (
                ""
              ) : (
                <CustomHr isChecked={isChecked} />
              )}
            </TrackItem>
            <Typography
              variant="caption"
              sx={{
                fontSize: "12px",
                fontWeight: "600px",
              }}
              noWrap
            >
              {text}
            </Typography>
          </Box>
        );
      })}
    </TrackDisplay>
  );
};

export default Tracking;
