import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Item = (props) => {

    return (
        <div className="col">
            <div className="card">
                <Link to={props.page}>
                    <img src={props.img} className="card-img-top" alt={props.title}/>
                </Link>
            </div>
        </div>
    )
}

    export default Item