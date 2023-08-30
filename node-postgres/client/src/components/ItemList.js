import React from "react";
import Item from "./Item";
import lenkuz from '../style/img/lenkuz.jpg';
import moskva from '../style/img/moskva5.jpg';
import novokuznetsk from '../style/img/novokuz4.jpg';
import AppRouter from "./AppRouter";
import { Link } from "react-router-dom";
import LenKuz from "../page/LenKuz.js";
import Moscow from "../page/Moscow.js";
import NovoKuz from "../page/NovoKuz.js"
import { observer } from "mobx-react";


const ItemList = observer(() => {
    const images = [
        {
            id: 1,
            title: "Ленинск-Кузнецкий",
            img: lenkuz,
            page: "/lenkuz",
        },
        {
            id: 2,
            title: "Москва",
            img: moskva,
            page: "/moscow",
        },
        {
            id: 3,
            title: "Новокузнецк",
            img: novokuznetsk,
            page: "/novokuz",
        },
    ]
    return (
            // <AppRouter/>
        images.map( item  =>
                <Item
                    key={item.id}
                    {...item}
                />

            )
    )

})

export default ItemList