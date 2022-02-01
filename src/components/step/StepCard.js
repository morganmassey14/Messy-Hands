import React from "react"

export const StepCard = ({ step }) => {
    return (
        <section className="step">
            <h1 className="step__name">{step.title}</h1>
            <h1 className="step__description1">{step.description1}</h1>
            <h1 className="step__description1">{step.description2}</h1>
        </section>
    )
}
