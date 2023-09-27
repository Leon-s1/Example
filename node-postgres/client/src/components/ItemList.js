import React from "react";
import Item from "./Item";
import lenkuz from '../style/img/lenkuz.jpg';
import moskva from '../style/img/москва1_1.jpg';
import novokuznetsk from '../style/img/novokuz11.jpg';
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
            title: "Новокузнецк",
            img: novokuznetsk,
            page: "/novokuz",
        },
        {
            id: 3,
            title: "Москва",
            img: moskva,
            page: "/moscow",
        },
        {
            id: 4,
            title: "Воркута",
            img: novokuznetsk,
            page: "/vorkuta",
        },
        {
            id: 5,
            title: "Норильск",
            img: novokuznetsk,
            page: "/norilsk",
        },
        {
            id: 6,
            title: "Шахты",
            img: novokuznetsk,
            page: "/shahti",
        },
        {
            id: 7,
            title: "Урал (УГМК)",
            img: novokuznetsk,
            page: "/ural",
        },
        {
            id: 8,
            title: "Реквизиты ООО Сибтранссервис ",
            img: novokuznetsk,
            page: "/rekvizit",
        },
        {
            id: 9,
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