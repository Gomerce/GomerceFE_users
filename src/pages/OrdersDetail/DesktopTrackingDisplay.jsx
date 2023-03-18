import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import tracking from "../../SetUpData/tracking";
import { CustomHr, IconBox, TrackDisplay, TrackItem } from "./styles";
const DesktopTrackingDisplay = () => {
  return (
    <TrackDisplay>
      {tracking.map((track, index) => {
        const { icon, text, isChecked } = track;
        return (
          <>
            <TrackItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <IconBox
                key={index + 2}
                sx={{
                  backgroundColor: isChecked ? "#B69D74" : "#F4F5EF",
                  color: isChecked ? "#fff" : "#000",
                }}
              >
                {icon}
              </IconBox>

              <Typography
                key={index + 1}
                variant="body1"
                fontSize={"14px"}
                fontWeight={400}
                align={"center"}
                mt={2}
                noWrap
              >
                {text}
              </Typography>
            </TrackItem>

            {index === tracking.length - 1 ? null : (
              <CustomHr key={index + 3} isChecked={isChecked} />
            )}
          </>
        );
      })}
    </TrackDisplay>
  );
};

export default DesktopTrackingDisplay;
