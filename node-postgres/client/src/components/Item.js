import React from "react";

const Item = (props) => {

    return (
        <div className="col">
            <div className="card">
                <a href=".././page/LenKuz.js">
                    <img src={props.img} className="card-img-top" alt={props.title}/>
                </a>


            </div>
        </div>
    )
}

    export default Item