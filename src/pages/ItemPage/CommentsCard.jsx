import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Ratings from "./Ratings";
import { CommentBox } from "./styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const CommentsCard = () => {
  return (
    <CommentBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: { mobile_0: "1em", mobile_600: "0" },
        }}
      >
        <Typography variant="body2">John Doe</Typography>
        <Box
          sx={{
            backgroundColor: "#F4F5EF",
            padding: "1%",
            marginRight: "2%",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
          }}
        >
          <MoreVertIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "230px",
        }}
      >
        <Ratings margin={"0 2% 0 0"} readOnly={true} />
        <Typography variant="caption">September 6, 2022</Typography>
      </Box>
      <Typography
        variant="body1"
        fontSize={"14px"}
        mt={{ mobile_0: "5%", tablet_600: "0" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex
        perferendis modi, labore inventore, neque nobis maxime esse est
        voluptates nesciunt vero. Cumque cupiditate odit nesciunt ducimus
        assumenda repellat ex?
      </Typography>
    </CommentBox>
  );
};

export default CommentsCard;
