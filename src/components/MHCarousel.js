import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { StepCard } from "./step/StepCard";
import { useParams } from "react-router-dom";
import { getStepsByProjectId } from "../modules/StepsManager";



export const MHCarousel = () => {
const {projectId} = useParams()
const [steps, setSteps] = useState([]);

const getSteps = () => {
    getStepsByProjectId(projectId).then(response => {
        setSteps(response)
    })
}

useEffect(() => {
    getSteps();
},[]);


return (
  <>
<Carousel interval={null} nextLabel={null}>

  <Carousel.Item>
    <div className="step__one">
    <h3>click the blue arrow to go back</h3>
      <h3>click the green arrow to see the next step</h3>
      </div>
  </Carousel.Item>
  
  {steps.map(step => <Carousel.Item >    
  <StepCard key={step.id} step={step} /> 
  </Carousel.Item>)}
  
  
  <Carousel.Item>
  <h3>Great job!! You did it!!</h3>
  </Carousel.Item>

  <Carousel.Item>
  <h3>Click on the camera to take a picture</h3>
  <h3>Click on the art to go to your gallary</h3>
  </Carousel.Item>
</Carousel>
</>
)}