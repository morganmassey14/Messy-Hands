import React from "react"

export const StepCard = ({ step }) => {
    return (
        <section className="step">
            <h1 className="step__name">{step.title}</h1>
        </section>
    )
}
