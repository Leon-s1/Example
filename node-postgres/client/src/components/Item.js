import React from "react";
import { Link } from "react-router-dom";
import '../../src/style/style.css'

import { NavLink } from "react-router-dom";

const Item = (props) => {

    return (
        // <div className="_row">
            <div className="_card">
                <Link to={props.page}>
                    <img src={props.img} alt={props.title} className="grey-image"/>
                    <div className="card__name">
                        {props.title}
                    </div>
                </Link>

            </div>
        // </div>
    )
}

    export default Item