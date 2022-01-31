import React from "react";
import { useHistory } from "react-router";
import pencil from "../../images/pencil.png";
import trash from "../../images/trash.png";


export const GallaryCard = ({ gallary, handleDeleteGallary }) => {
    const history = useHistory();
    return (
        <section className="gallary">
            <h1 className="gallary__name">{gallary.title}</h1>
            <button className="buttonDelete" onClick={() => handleDeleteGallary(gallary.id)}><img src={trash}/></button>
            <button className="buttonEdit" 
                onClick={() => history.push(`/${gallary.id}/edit`)}><img src={pencil}/>
            </button>
        </section>
    
    )
}