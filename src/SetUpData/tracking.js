import React from "react";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const tracking = [
  {
    icon: <AssignmentTurnedInIcon sx={{ fontSize: "45px" }} />,
    text: "Submit order",
    isChecked: true,
  },
  {
    icon: <PublishedWithChangesIcon sx={{ fontSize: "45px" }} />,
    text: "Processing order",
    isChecked: true,
  },
  {
    icon: <RedeemIcon sx={{ fontSize: "45px" }} />,
    text: "Packaging",
    isChecked: false,
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: "45px" }} />,
    text: "On delivery",
    isChecked: false,
  },
  {
    icon: <HowToRegIcon sx={{ fontSize: "45px" }} />,
    text: "Order delivered",
    isChecked: false,
  },
];

export default tracking;
