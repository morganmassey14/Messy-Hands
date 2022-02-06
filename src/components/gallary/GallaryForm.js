import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addGallaryEntry } from '../../modules/GallaryManager';

export const GallaryForm = () => {
    let user = parseInt(sessionStorage.getItem("mh_user"))

    const [gallaryEntry, setGallaryEntry] = useState({
        userId: user,
        title: "",
        image: ""
    })
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("")

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

   
    const uploadImage = async (e) => {
        console.log("upload image", e)
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "ltpz1b8n");
        setLoading(true);
        
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dexjhtget/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
        setLoading(false);
    };

    const handleClickSaveGallaryEntry = (event) => {
        event.preventDefault()

        addGallaryEntry(gallaryEntry)
        .then(() => history.push("/gallary"))
    }

    return (
        <>
        <div className="gallary__form">
        <img className="mainImage" src={image} />
        <fieldset className="file-input">
                    <input type="file" id="file" className="file" onChange={uploadImage}/>
                    <label for="file">Choose File</label>
                </fieldset>
                    <div className="form-group">
					<label htmlFor="gallaryTitle">Name of Your Creation</label>
					<input type="title" id="title" onChange={handleControlledInputChange} required autoFocus className="gallaryTitle" placeholder="title" value={gallaryEntry.title} />
                <button className="buttonSave"
				onClick={handleClickSaveGallaryEntry}>
				POST
          </button>
          </div>
          </div>
        </>
    )
}
