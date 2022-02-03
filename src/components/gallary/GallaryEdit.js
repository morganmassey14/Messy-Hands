import React, { useState, useEffect } from "react"
import { update, getGallaryById } from "../../modules/GallaryManager"
import { useParams, useHistory } from "react-router-dom"

export const GallaryEditForm = () => {
    let user = parseInt(sessionStorage.getItem("mh_user"))
    const [gallary, setGallary] = useState({ 
        id: 0,
        userId: user,
        title: "",
        image: ""
    });

    const [image, setImage] = useState("")

    const [isLoading, setIsLoading] = useState(false);

    const { gallaryId } = useParams();
    
    const history = useHistory();

    const handleFieldChange = (evt) => {
        const stateToChange = { ...gallary };
        stateToChange[evt.target.id] = evt.target.value;
        setGallary(stateToChange);
    }

    useEffect(() => {
        getGallaryById(gallaryId)
            .then(gallary => {
                setGallary(gallary);
                setImage(gallary.image)
            })
    }, []);

    const uploadImage = async (e) => {
      console.log("upload image", e)
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "ltpz1b8n");
      setIsLoading(true);
      
      const res = await fetch(
          "https://api.cloudinary.com/v1_1/dexjhtget/image/upload",
          {
              method: "POST",
              body: data,
          }
      );

        const file = await res.json();
        setImage(file.secure_url);
        setIsLoading(false);
  };


    const updateExistingGallary = event => {
        event.preventDefault()
        setIsLoading(true);
        const editedGallaryObj ={
            id: parseInt(gallaryId),
            userId: user,
            title: gallary.title,
            image: image ? image : user.image
        }

        update(editedGallaryObj, gallaryId)
    .then(() => history.push("/gallary")
    )
  }


return (
<>
<div>
<img className="mainImage" src={image} />
                    <input className="" type="file" id="image" onChange={(event) => {uploadImage(event)}} placeholder="image" />
                    </div>
<form>
        <fieldset>
          <div className="formgrid">
          <label htmlFor="gallaryTitle">Name of Your Creation</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={gallary.title}
            />
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingGallary}
              className="btn btn-primary"
            >UPDATE</button>
          </div>
        </fieldset>
      </form>
</>
)}
