import { useState } from "react";
import styled from "@emotion/styled";

const FancyItem = styled.li({
  width: "450px",
});

const FancyImg = styled.img({
  display: "block",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  cursor: "pointer",
});
const ImageGalleryItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    props.showBigPicture(props.bigImg);
  };
  return (
    <FancyItem className="gallery-item" onClick={handleClick}>
      <FancyImg src={props.url} alt="some picture" />
    </FancyItem>
  );
};

export default ImageGalleryItem;
