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
        const newGallaryEntry = { ...gallaryEntry }
        newGallaryEntry.image = file.secure_url
        setGallaryEntry(newGallaryEntry);
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
            {image ? (
                <img
               src={image} />
            ) : (
                <img className="default__img"
                src={require(`../../images/defaultimg.png`)} />
            
            )}
    
        <fieldset className="file-input">
                    <input type="file" id="file" className="file" onChange={uploadImage}/>
                    <label htmlFor="file" className="custom__file">
                CHOOSE PIC
            </label>
                </fieldset>
                <div className="title__">
					<label htmlFor="gallaryTitle">Name of Your Creation</label></div>
					<input type="title" id="title" onChange={handleControlledInputChange} required autoFocus className="gallaryTitle" value={gallaryEntry.title} />
                <div className="save__button">
                <button className="buttonSave"
				onClick={handleClickSaveGallaryEntry}>
				POST
          </button>
          </div>
          </div>
        </>
    )
}
