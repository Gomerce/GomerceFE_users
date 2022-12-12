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
        <Typography variant="h6">Ratings and reviews</Typography>
        <Typography variant="caption">
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
