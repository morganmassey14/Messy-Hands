import React, {useEffect, useState} from 'react';
import { getAllItems } from '../../modules/ItemsManager'
import { ItemCard } from './ItemCard';

export const ItemList = () => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        getAllItems().then(itemsFromAPI => {
            setItems(itemsFromAPI);
        })
    }
        useEffect(() => {
            getItems();
        }, [])

        return (
            <>
            <div className="section__items">
                {items.map(item => <ItemCard key={item.id} item={item} />)}
            </div>
            </>
        )
    }
