import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>erfahren Sie beste Reisen</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://picsum.photos/id/1020/1080/1960"
              text="lorem emosom lorem emosom lorem emosom"
              label="klassik"
              path="/services"
            />

            <CardItem
              src="https://picsum.photos/id/1021/1080/1960"
              text="lorem emosom lorem emosom lorem emosom"
              label="metall"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
