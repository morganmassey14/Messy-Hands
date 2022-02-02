import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addGallaryEntry } from '../../modules/GallaryManager';

export const GallaryForm = () => {
    let user = parseInt(sessionStorage.getItem("mh_user"))

    const [gallaryEntry, setGallaryEntry] = useState({
        userId: user,
        gallaryTitle: ""
    })

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newGallaryEntry = { ...gallaryEntry }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newGallaryEntry[event.target.id] = selectedVal
        setGallaryEntry(newGallaryEntry)
    }

    const handleCancelButton = () => {
        history.push("/gallary")
    }

    const handleClickSaveGallaryEntry = (event) => {
        event.preventDefault()

        addGallaryEntry(gallaryEntry)
        .then(() => history.push("/gallary"))
    }

    return (
        <>
        <form className="gallaryForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gallaryTitle">Gallary Title</label>
                    <input type="text" id="gallaryTitle" onChange={handleControlledInputChange} required autoFocus className="gallarytitle" value= {gallaryEntry.gallaryTitle} />
                </div>
                <button className="buttonSave"
				onClick={handleClickSaveGallaryEntry}>
				Save
          </button>
          <button className="buttonCancel"
                onClick={handleCancelButton}>
                Cancel
            </button>
            </fieldset>
        </form>
        </>
    )
}