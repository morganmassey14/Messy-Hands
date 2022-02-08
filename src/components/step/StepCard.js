import React, { useEffect, useState } from "react";
import { getStepItemsByStepId } from "../../modules/ItemsManager";
import { ItemCard } from "../item/ItemCard";
import c23earth from "../../images/c23earth.png";
import c23star from "../../images/c23star.png";

export const StepCard = ({ step }) => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    getStepItemsByStepId(step.id).then((response) => {
      setItems(response);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="step">
        <section className="step">
          <div className="stepItems">
            {items.map((itemObj) => (
              <ItemCard key={itemObj.id} item={itemObj.item} />
            ))}
          </div>
          {step.image1 != "" ? (
            <>
              <div className="steps__two">
                <div className="stepstwo__flex">
                  <div className="step__image-section2">
                    <h2 className="step__description2">{step.description2}</h2>
                    <img
                      className="step__img2"
                      src={require(`../../images/${step.image2}`)}
                      alt=""
                    />
                  </div>
                  <div className="step__image-section1">
                    <h2 className="step__description1">{step.description1}</h2>
                    <img
                      className="step__img1"
                      src={require(`../../images/${step.image1}`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="step__description__section2">
                  <img className="c23earth" src={c23earth} alt="" />
                  <h1 className="step__name">{step.title}</h1>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="steps__one">
                <div className="text__container2">
                  <h2 className="step__description1">{step.description2}</h2>
                  <img className="centered" src={c23star} alt="" />
                </div>
                <div className="step__description__section1">
                  <img className="c23earth" src={c23earth} alt="" />
                  <h2 className="step__description1">{step.description1}</h2>
                  <h1 className="step__name">{step.title}</h1>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};
