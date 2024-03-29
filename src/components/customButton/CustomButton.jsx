import React from "react";
import "./customButton.style.css";

const CustomButton = ({ onClickHandler, text }) => {
  return (
    <div class="CustomButton">
      <button onClick={onClickHandler}>{text}</button>
    </div>
  );
};

export default CustomButton;
