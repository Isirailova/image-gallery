import React from "react";
import Header from "./components/header/Header";
import TextContent from "./components/textContent/TextContent";
import ImageCard from "./components/imageCard/ImageCard";
import image1 from "./assets/images/spring.jpeg";
import image2 from "./assets/images/summer.jpeg";
import image3 from "./assets/images/fall.jpeg";
import image4 from "./assets/images/winter.jpeg";
import CustomButton from "./components/customButton/CustomButton";
import "./App.css";

const App = () => {
  const showDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = new Date().getDay();
    alert(`Today is ${days[currentDay]}`);
  };

  const showMonth = () => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = new Date().getMonth();
    alert(`Current month is ${month[currentMonth]}`);
  };

  const showSeason = () => {
    const month = new Date().getMonth();
    let season;
    if (month >= 2 && month <= 4) {
      season = "Spring 🌱";
    } else if (month >= 5 && month <= 7) {
      season = "Summer 🌞";
    } else if (month >= 8 && month <= 10) {
      season = " Fall 🍂";
    } else {
      season = "Winter ❄️";
    }
    alert(`Current season is ${season}`);
  };

  return (
    <div className="App">
      <Header />
      <div className="imageRow">
        <ImageCard src={image1} alt="Image 1" />
        <ImageCard src={image2} alt="Image 2" />
        <ImageCard src={image3} alt="Image 3" />
        <ImageCard src={image4} alt="Image 4" />
      </div>
      <TextContent />
      <div className="buttonRow">
        <CustomButton text="Show Day" onClickHandler={showDay} />
        <CustomButton text="Show Month" onClickHandler={showMonth} />
        <CustomButton text="Show Season" onClickHandler={showSeason} />
      </div>
    </div>
  );
};

export default App;
