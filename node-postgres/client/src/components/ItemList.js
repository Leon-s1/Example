import React from "react";
import Item from "./Item";




const ItemList = () => {
    const images = [
        {
            id: 1,
            title: "Ленинск-Кузнецкий",
            img: "https://e0.edimdoma.ru/data/ingredients/0000/1089/1089-ed4_small.jpg?1482770262",
        },
        {
            id: 2,
            title: "Новокузнецк",
            img: "https://e3.edimdoma.ru/data/ingredients/0000/8813/8813-ed4_small.jpg?1482763602",
        },{
            id: 3,
            title: "Москва",
            img: "https://e1.edimdoma.ru/data/ingredients/0000/8722/8722-ed4_small.jpg?1482763618",
        },
    ]
    return (
        images.map(item =>
        <Item
            key={item.id}
            {...item}
        />
            )
    )

}

export default ItemList