import React from "react"


export const ProjectCard = ({ project }) => {
    return (
      <>
        <section className="project">
            <h1 className="project__name">{project.title}</h1>
            <picture>
            <img src={require(`../../images/${project.image}`)} alt="projectImage" />
            </picture>
        </section>
        </>
    )
}