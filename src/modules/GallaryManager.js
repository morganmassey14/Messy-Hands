const remoteURL = "http://localhost:2022"

export const getGallaryById = (gallaryId) => {
    return fetch(`${remoteURL}/gallary/${gallaryId}`)
    .then(res => res.json())
}

export const getAllGallaries = () => {
    return fetch(`${remoteURL}/gallary`)
    .then(res => res.json())
}

export const deleteGallary = (id) => {
    return fetch(`${remoteURL}/gallary/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addGallaryEntry = (newGallaryEntry) => {
    return fetch(`${remoteURL}/gallary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGallaryEntry)
    }).then(response => response.json())
}

export const getGallaryByUser = (userId) => {
    return fetch(`${remoteURL}/gallary/?userId=${userId}`)
    .then(res => res.json())
}

export const update = (editedGallary, id) => {
    return fetch(`${remoteURL}/gallary/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGallary)
    }).then(data => data.json());
}