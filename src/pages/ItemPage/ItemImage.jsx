import React from "react";
import { Image, Preview, Thumbnail, ThumbnailsSection } from "./styles";
import phone from "../../assets/images/1 (2).jpg";
import phone2 from "../../assets/images/1 (1).jpg";
const ItemImage = () => {
  return (
    <Image>
      <Preview img={phone} />
      <ThumbnailsSection>
        {[...Array(5)].map((_, index) => (
          <Thumbnail key={index} img={phone2} />
        ))}
      </ThumbnailsSection>
    </Image>
  );
};

export default ItemImage;
