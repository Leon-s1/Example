import React, {useState} from "react";
import Item from "./Item";
import lenkuz from '../style/img/lenkuz.jpg';
import moskva from '../style/img/moskva.jpg';
import novokuznetsk from '../style/img/novokuz.jpg';
import vorkuta from '../style/img/vorkuta.jpg'
import norilsk from "../style/img/norilsk.jpg"
import shahti from "../style/img/shahty.jpg"
import ural from "../style/img/ugmk.jpg"
import sts from "../style/img/dnk.jpg"
import '../../src/style/style.css'

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
        // flag: false,
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
    const [activeItem, setActiveItem] = useState(images[0])

    function handlClick(item) {
        setActiveItem(item)
        console.log('item =', item)
    }

    return (
        images.map((item) =>
            <div key={item.id} className={activeItem === item ? 'card active' : 'card'}
                 onClick={() => handlClick(item)}>
                <Item key={item.id}
                      {...item}
                />
            </div>
        )
    )

}

export default ItemList