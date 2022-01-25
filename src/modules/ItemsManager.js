const remoteURL = "http://localhost:2022"

export const getItemById = (itemId) => {
    return fetch(`${remoteURL}/items/${itemId}`)
    .then(res => res.json())
}

export const getAllItems = () => {
    return fetch(`${remoteURL}/items`)
    .then(res => res.json())
}