import React from "react"
import { Link } from "react-router-dom"


export const ProjectCard = ({ project }) => {
    return (
      <>
        <section className="project">
            <picture>
            <Link to={`/carousel/${project.id}`} className="carousel"><img src={require(`../../images/${project.image}`)} alt="projectImage" /></Link>
            </picture>
        </section>
        </>
    )
}
