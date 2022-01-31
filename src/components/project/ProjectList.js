import React, {useEffect, useState} from 'react';
import { getAllProjects } from '../../modules/ProjectsManager';
import { ProjectCard } from './ProjectCard';
import earth from "../../images/earth.png";
import pstars from "../../images/projectstars.png";

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
        <img className="project__earth" src={earth} alt="" />
        <img className="project__stars" src={pstars} alt="" />
        <h1>Click on a picture to start a craft</h1>
            {projects.map(project => <ProjectCard key={project.id} project={project} /> )}
        </div>
        </>
    )
}