import React from "react";
import { CollectionsWrapper, CollectionRow } from "./styles";
import Typography from "@mui/material/Typography";
import CollectionCard from "./CollectionCard";
import collectionData from "../../SetUpData/collectionData";

const Collections = () => {
  return (
    <CollectionsWrapper>
      <Typography
        variant="h6"
        fontSize={"18.75px"}
        fontWeight={"600"}
        color={"#8E8E8E"}
      >
        Collections
      </Typography>
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
