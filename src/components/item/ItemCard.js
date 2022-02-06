import React from "react"

export const ItemCard = ({ item }) => {
    return (
        <section className="item">
            <img src={require(`../../images/${item.image}`)} alt="" />
            <h1 className="item__name">{item.title}</h1>
        </section>
    )
}