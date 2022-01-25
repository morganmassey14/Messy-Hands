const remoteURL = "http://localhost:2022"

export const getProjectById = (projectId) => {
    return fetch(`${remoteURL}/projects/${projectId}`)
    .then(res => res.json())
}

export const getAllProjects = () => {
    return fetch(`${remoteURL}/projects`)
    .then(res => res.json())
}