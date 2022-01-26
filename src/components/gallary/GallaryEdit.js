import React, { useState, useEffect } from "react"
import { update, getGallaryById } from "../../modules/GallaryManager"
import { useParams, useHistory } from "react-router-dom"

export const GallaryEditForm = () => {
    let user = parseInt(sessionStorage.getItem("mh_user"))
    const [gallary, setGallary] = useState({ 
        id: 0,
        userId: user,
        title: ""
    });


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
                setIsLoading(false)
            })
    }, []);

    const updateExistingGallary = evt => {
        evt.preventDefault()
        setIsLoading(true);
        const editedGallaryObj ={
            id: parseInt(gallaryId),
            userId: user,
            title: gallary.title
        }

        update(editedGallaryObj, gallaryId)
    .then(() => history.push("/gallary")
    )
  }


return (
<>
<form>
        <fieldset>
          <div className="formgrid">
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
            >Submit</button>
          </div>
        </fieldset>
      </form>
</>
)}
