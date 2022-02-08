import React, {useEffect, useState} from 'react';
import { GallaryCard } from './GallaryCard';
import { useHistory } from 'react-router';
import { deleteGallary, getGallaryByUser} from '../../modules/GallaryManager';
import instructions from "../../images/gallaryinstructions.png";
import earth from "../../images/c1earth.png";


export const GallaryList = () => {
    const [gallaries, setGallaries] = useState([]);
    let user = parseInt(sessionStorage.getItem("mh_user"))
    const history = useHistory();

    const getGallaries = () => {
        return getGallaryByUser(user).then(response => {
            setGallaries(response)
        })
    }

    const handleDeleteGallary = id => {
        deleteGallary(id)
            .then(() => getGallaryByUser(user).then(setGallaries))
    }

    useEffect(() => {
        getGallaries();
    }, []);

    return(
        <>
        <div className="gallary-btn-into__text">
         <h1>MY ART</h1>   
        <button type="button"
                    className="newArt__button"
                    onClick={() => { history.push("/gallary/create") }}>
                    New Art
                </button>
                </div>
       <div className="section__gallaries">
       <img className="gallary__logo" src={earth} alt="" /> 
        
            <img className="gallary__instructions" src={instructions} alt="" />
            </div>
            <div className="gallary__images">
            {gallaries.map(gallary => <GallaryCard key={gallary.id} gallary={gallary} handleDeleteGallary={handleDeleteGallary} /> )}
        </div>
        </>
    )
}