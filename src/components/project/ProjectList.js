import React, {useEffect, useState} from 'react';
import { getAllProjects } from '../../modules/ProjectsManager';
import { ProjectCard } from './ProjectCard';

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
            {projects.map(project => <ProjectCard key={project.id} project={project} /> )}
        </div>
        </>
    )
}