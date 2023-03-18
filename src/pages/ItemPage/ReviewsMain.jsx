import React from "react";
import Typography from "@mui/material/Typography";
import barDetails from "../../SetUpData/RatingProgressBar";
import {
  BarWrap,
  RatingSummary,
  ReviewsHeadWrap,
  ReviewsSection,
  ReviewsStatusText,
} from "./styles";
import Ratings from "./Ratings";
import LinearProgressBar from "./LinearProgressBar";
import CommentsCard from "./CommentsCard";
const ReviewsMain = () => {
  return (
    <ReviewsSection>
      <ReviewsHeadWrap>
        <Typography
          variant="h6"
          fontSize={{
            mobile_0: "16px",
            tablet_600: "20px",
            laptop_1024: "28px",
          }}
        >
          Ratings and reviews
        </Typography>
        <Typography
          variant="caption"
          fontSize={"14px"}
          sx={{ display: { mobile_0: "none", tablet_600: "inline-block" } }}
        >
          <b>Ratings and reviews are verified</b>
        </Typography>
      </ReviewsHeadWrap>
      <RatingSummary>
        <ReviewsStatusText>
          <Typography variant="h5">4.2</Typography>
          <Ratings margin={"10% 0%"} readOnly={true} />
          <Typography variant="caption">{"124"} reviews</Typography>
        </ReviewsStatusText>
        <BarWrap>
          {barDetails.map((detail) => {
            const { label, value } = detail;
            return <LinearProgressBar label={label} value={value} />;
          })}
        </BarWrap>
      </RatingSummary>
      <CommentsCard />
      <CommentsCard />
    </ReviewsSection>
  );
};

export default ReviewsMain;
