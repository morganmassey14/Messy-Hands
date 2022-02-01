import React from "react"
import { Link } from "react-router-dom"


export const ProjectCard = ({ project }) => {
    return (
      <>
        <section className="project">
            <h1 className="project__name">{project.title}</h1>
            <picture>
            <Link to="/carousel" className="carousel"><img src={require(`../../images/${project.image}`)} alt="projectImage" /></Link>
            </picture>
        </section>
        </>
    )
}