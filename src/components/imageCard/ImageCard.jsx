import React from "react";
import "./imageCard.style.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div class="ImageCard">
      <img src={src} alt={alt} style={{ width: "300px", height: "200px" }} />
    </div>
  );
};

export default ImageCard;
