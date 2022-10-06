import React from "react";

import "./_styles.scss";

import PersonOne from "../PersonOne";
import PersonTwo from "../PersonTwo";

function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="slider__item carousel-item active">
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
        <div className="slider__item carousel-item">
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
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
