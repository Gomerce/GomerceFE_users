import React from "react";
import { collectionHeading, CollectionsWrapper, CollectionRow } from "./styles";
import Typography from "@mui/material/Typography";
import CollectionCard from "./CollectionCard";
import collectionData from "../../SetUpData/collectionData";

const Collections = () => {
  return (
    <CollectionsWrapper>
      <Typography sx={collectionHeading}>Collections</Typography>
      <CollectionRow>
        {collectionData.map((data, index) => {
          return (
            <CollectionCard
              key={index}
              title={data.title}
              image={data.img}
              link={data.link}
            />
          );
        })}
      </CollectionRow>
    </CollectionsWrapper>
  );
};

export default Collections;
