import React from "react";
import {Link} from "react-router-dom";
import '../../src/style/style.css'

const Item = (item) => {
    return (
        <Link to={item.page}>
            <img src={item.img} alt={item.title} className="grey-image"/>
            <div className="card__name">
                {item.title}
            </div>
        </Link>
    )
}

export default Item