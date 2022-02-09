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
import finishfriends from "../images/finishfriends.png";
import cendtree from "../images/cendtree.png";
import cendstar from "../images/cendstar.png";
import cendearth from "../images/cendearth.png";
import blueback from "../images/bluearrowdesc.png";
import greennext from "../images/greenarrowdesc.png";





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
      <div className="logo__friends">
        <img className="c1star" src={c1star} alt="" />
        <img className="c1earth" src={c1earth} alt="" />
        <img className="c1tree" src={c1tree} alt="" />
    </div>
    <div className="description__arrows">
    <img className="text__bg" src={blueback} alt="" />
    <img className="text__bg" src={greennext} alt="" />
      </div>
      </div>
  </Carousel.Item>
  
    {steps.map(stepObj => <Carousel.Item key={stepObj.id} >  
      <StepCard step={stepObj} ></StepCard>
  </Carousel.Item>)}

  
  
  <Carousel.Item>
  <h3 className="finish__text">Great job!! You did it!!</h3>
  <img className="finishfriends" src={finishfriends} alt="" />
  </Carousel.Item>

  <Carousel.Item className="lastCarousal">
  <div className="gallary__end">
  <h3 className="finish__text">Picture Time!!!</h3>
  <img className="cendearth" src={cendearth} alt="" />
  <div className="gallary__container1">
  <h2>Click on the camera to take a picture</h2>
  <img className="centered" src={cendstar} alt="" />
  </div>
  <Link to="/gallary/create" className="camera__button"><img className="camerabutton" src={camera} alt="" /></Link>
  <div className="gallary__container2">
  <h2>Click on the art to go to your gallary</h2>
  <img className="centered" src={cendtree} alt="" />
  </div>
  <Link to="/gallary" className="mhcgallary__button"><img className="mhcgallarybutton" src={gallary} alt="" /></Link>
  </div>  
  </Carousel.Item>
</Carousel>
</>
)}