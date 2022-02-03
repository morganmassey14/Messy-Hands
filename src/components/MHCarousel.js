import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { StepCard } from "./step/StepCard";
import { useParams } from "react-router-dom";
import { getStepsByProjectId } from "../modules/StepsManager";
import { Link } from "react-router-dom";
import camera from "../images/carousalcamera.png";
import gallary from "../images/carouselgallary.png";
import c1earth from "../images/c1earth.png";
import c1star from "../images/c1star.png";
import c1tree from "../images/c1tree.png";
import c23earth from "../images/c23earth.png";
import c23star from "../images/c23star.png";
import finishfriends from "../images/finishfriends.png";
import cendtree from "../images/cendtree.png";
import cendstar from "../images/cendstar.png";
import cendearth from "../images/cendearth.png";




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
    <img className="c1earth" src={c1earth} alt="" />
    <img className="c1star" src={c1star} alt="" />
    <img className="c1tree" src={c1tree} alt="" />
    <h3>click the blue arrow to go back</h3>
      <h3>click the green arrow to see the next step</h3>
      </div>
  </Carousel.Item>
  
  {steps.map(stepObj => <Carousel.Item key={stepObj.id} > 
    <img className="c23earth" src={c23earth} alt="" />
    <img className="c23star" src={c23star} alt="" />   
  <StepCard step={stepObj} /> 
  </Carousel.Item>)}
  
  
  <Carousel.Item>
  <h3>Great job!! You did it!!</h3>
  <img className="finishfriends" src={finishfriends} alt="" />
  </Carousel.Item>

  <Carousel.Item >
  <span aria-hidden="true" className="carousel-control-next-icon" />
  <img className="cendstar" src={cendstar} alt="" />
  <img className="cendearth" src={cendearth} alt="" />
  <img className="cendtree" src={cendtree} alt="" />
  <h3>Click on the camera to take a picture</h3>
  <Link to="/gallary/create" className="camera__button"><img className="camerabutton" src={camera} alt="" /></Link>
  <h3>Click on the art to go to your gallary</h3>
  <Link to="/gallary" className="mhcgallary__button"><img className="mhcgallarybutton" src={gallary} alt="" /></Link>
  </Carousel.Item>
</Carousel>
</>
)}