import React, {useState} from "react";
import Item from "./Item";
import lenkuz from '../style/img/lenkuz.jpg';
import moskva from '../style/img/москва1_1.jpg';
import novokuznetsk from '../style/img/novokuz11.jpg';
import vorkuta from '../style/img/vorkuta2.jpg'
import norilsk from "../style/img/norilsk4.jpg"
import shahti from "../style/img/shahty1.jpg"
import ural from "../style/img/ugmk1.jpg"
import sts from "../style/img/dnk14_2.jpg"
import { observer } from "mobx-react";

const images = [

    // {
    //     id: 1,
    //     title: "Сибтранссервис",
    //     img: sts,
    //     page: "/novokuz",
    // },
    {
        id: 2,
        title: "Ленинск-Кузнецкий",
        img: lenkuz,
        page: "/lenkuz",
        flag: true,
    },
    {
        id: 3,
        title: "Новокузнецк",
        img: novokuznetsk,
        page: "/novokuz",
        // flag: false,
    },
    {
        id: 4,
        title: "Москва",
        img: moskva,
        page: "/moscow",
    },
    {
        id: 5,
        title: "Воркута",
        img: vorkuta,
        page: "/vorkuta",
    },
    {
        id: 6,
        title: "Норильск",
        img: norilsk,
        page: "/norilsk",
    },
    {
        id: 7,
        title: "Шахты",
        img: shahti,
        page: "/shahti",
    },
    {
        id: 8,
        title: "Урал (УГМК)",
        img: ural,
        page: "/ural",
    },
    {
        id: 9,
        title: "Реквизиты ООО Сибтранссервис ",
        img: sts,
        page: "/rekvizit",
    },
]

const ItemList = () => {
    // const [items, setItems] = useState(images);



        console.log(images)

    return (
            // <AppRouter/>
        images.map( item  =>
                <Item key={item.id}
                    {...item}
                />
        )
    )

}

export default ItemList