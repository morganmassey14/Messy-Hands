import React from "react"

export const ItemCard = ({ item }) => {
    return (
        <section className="item">
            <h1 className="item__name">{item.title}</h1>
            <img src={require(`../../images/${item.image}`)} alt="" />
        </section>
    )
}