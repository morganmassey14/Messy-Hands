import React, { useEffect, useState } from "react"
import { getStepItemsByStepId } from "../../modules/ItemsManager";
import { ItemCard } from "../item/ItemCard";
import c23earth from "../../images/c23earth.png";
import c23star from "../../images/c23star.png";

export const StepCard = ({ step }) => {   
const [items, setItems] = useState([]);

const getItems = () => {
    getStepItemsByStepId(step.id).then(response => {
        setItems(response)
    })
}

useEffect(() => {
    getItems(); 
}, []);


    return (
        <>
    
            <section className="step">
            {items.map(itemObj =><ItemCard key={itemObj.id} item={itemObj.item} />)}
           
            {step.image1 != "" ?
            <>
            <h2 className="step__description2">{step.description2}</h2>
            <img className="step__image2" src={require(`../../images/${step.image2}`)} alt="" />
            <h2 className="step__description1">{step.description1}</h2>
            <img className="step__image1" src={require(`../../images/${step.image1}`)} alt="" />
            <img className="c23earth" src={c23earth} alt="" />
            <h1 className="step__name">{step.title}</h1>
            </>
            :
            <>
            <div className="text__container2">
            <h2 className="step__description1">{step.description2}</h2>
            <img className="centered" src={c23star} alt="" /> 
            </div>
            <img className="c23earth" src={c23earth} alt="" />
            <h2 className="step__description1">{step.description1}</h2>
            <h1 className="step__name">{step.title}</h1>
            </>
            }
            
            </section>
    </>
    )
}
