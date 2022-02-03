import React, {useEffect, useState} from 'react';
import { GallaryCard } from './GallaryCard';
import { useHistory } from 'react-router';
import { deleteGallary, getGallaryByUser} from '../../modules/GallaryManager';

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
        <section className="newGallaryButton">
        <button type="button"
                    className="buttonEntry"
                    onClick={() => { history.push("/gallary/create") }}>
                    New Art
                </button>
        </section>
        <div className="section__gallaries">
            {gallaries.map(gallary => <GallaryCard key={gallary.id} gallary={gallary} handleDeleteGallary={handleDeleteGallary} /> )}
        </div>
        </>
    )
}