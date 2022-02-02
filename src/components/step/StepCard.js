import React, { useEffect, useState } from "react"
import { getStepItemsByStepId } from "../../modules/ItemsManager";
import { ItemCard } from "../item/ItemCard";

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
    
            {items.map(itemObj =><ItemCard key={itemObj.id} item={itemObj.item} />)}
            <section className="step">
            <h1 className="step__name">{step.title}</h1>
            <h1 className="step__description1">{step.description1}</h1>
            <h1 className="step__description1">{step.description2}</h1>
           
            {step.image1 != "" &&
            <>
            <img src={require(`../../images/${step.image1}`)} alt="" />
            <img src={require(`../../images/${step.image2}`)} alt="" />
            </>
            }
            
            </section>
        </>
    )
}
