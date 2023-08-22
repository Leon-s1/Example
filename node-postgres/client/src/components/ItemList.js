import React from "react";
import Item from "./Item";
import lenkuz from '../style/img/lenkuz.jpg';
import moskva from '../style/img/moskva3.jpg';
import novokuznetsk from '../style/img/novokuz4.jpg';





const ItemList = () => {
    const images = [
        {
            id: 1,
            title: "Ленинск-Кузнецкий",
            img: lenkuz,
            // link: '.././',
        },
        {
            id: 2,
            title: "Новокузнецк",
            img: moskva,
        },{
            id: 3,
            title: "Москва",
            img: novokuznetsk,
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