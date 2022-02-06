import React, {useEffect, useState} from 'react';
import { getAllProjects } from '../../modules/ProjectsManager';
import { ProjectCard } from './ProjectCard';
import earth from "../../images/earth.png";
import pstars from "../../images/projectstars.png";
import textbg from "../../images/textbg.png";

export const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        getAllProjects().then(projectsFromAPI => {
            setProjects(projectsFromAPI);
        })
    }


    useEffect(() => {
        getProjects();
    }, []);


    return(
        <>
        <div className="section__projects">
        <div className="project__intro">   
        <img className="project__earth" src={earth} alt="" />
        <div className="text__container">
        <h2>Click on a picture to start a craft</h2>
        <img className="centered" src={textbg} alt="" />
        </div>
        <img className="project__stars" src={pstars} alt="" />
        </div> 
        <div className="project__image">
            {projects.map(project => <ProjectCard key={project.id} project={project} /> )}
            </div>
        </div>
        </>
    )
}