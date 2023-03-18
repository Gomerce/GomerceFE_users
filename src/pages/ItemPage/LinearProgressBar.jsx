import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.tertiary,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: " #1F2839",
  },
}));
const LinearProgressBar = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <Typography variant="body1">{props.label}</Typography>
      <Box
        sx={{
          width: { mobile_0: "100%", laptop_1152: "689px" },
          marginLeft: "2%",
        }}
      >
        <BorderLinearProgress variant="determinate" value={props.value} />
      </Box>
    </Box>
  );
};

export default LinearProgressBar;
