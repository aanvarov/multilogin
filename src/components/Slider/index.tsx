import React from "react";

import "./_styles.scss";

import PersonOne from "../PersonOne";
import PersonTwo from "../PersonTwo";

function Slider() {
  return (
    <div className="slider">
      <div className="slider__item">
        <div className="slider__item__card">
          <div className="slider__item__card__image">
            <PersonOne />
          </div>
          <div className="slider__item__card__content">
            <p>
              “Virtual machines just weren’t feasible. The process was ‘hope and pray’ they don’t
              ban you. So I realized I needed something to protect us.”
            </p>
            <h4>Adam, Owner, Rocket 31</h4>
          </div>
        </div>
        <div className="slider__item__card">
          <div className="slider__item__card__content">
            <p>
              “Virtual machines just weren’t feasible. The process was ‘hope and pray’ they don’t
              ban you. So I realized I needed something to protect us.”
            </p>
            <h4>Adam, Owner, Rocket 31</h4>
          </div>
          <div className="slider__item__card__image">
            <PersonTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
