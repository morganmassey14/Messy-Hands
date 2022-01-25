const remoteURL = "http://localhost:2022"

export const getStepById = (stepId) => {
    return fetch(`${remoteURL}/steps/${stepId}`)
    .then(res => res.json())
}

export const getAllSteps = () => {
    return fetch(`${remoteURL}/steps`)
    .then(res => res.json())
}