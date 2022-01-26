import React from "react";
import { useHistory } from "react-router";


export const GallaryCard = ({ gallary, handleDeleteGallary }) => {
    const history = useHistory();
    return (
        <section className="gallary">
            <h1 className="gallary__name">{gallary.title}</h1>
            <button className="buttonDelete" onClick={() => handleDeleteGallary(gallary.id)}>Delete</button>
            <button className="buttonEdit" type="button"
                onClick={() => history.push(`/${gallary.id}/edit`)}>
                Edit
            </button>
        </section>
    
    )
}