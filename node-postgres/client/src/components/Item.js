import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../src/style/style.css'

import { NavLink } from "react-router-dom";

const Item = (props) => {
    const [flag, setFlag] = useState(false)
    // const [items, setItems] = useState(props)



    const isActive =  () => {
            setFlag (true)
        }

    function toggleHandler(e) {
        // e.preventDefault();
        // (e.target.classList.contains("active") === true) ? e.target.classList.remove("active") : e.target.classList.add("active");
        // flag ? {setFlag:true} : {setFlag:false}
        flag ? setFlag(false)  : setFlag(true)
        console.log ('props.flag = ', flag, props.id)
        console.log ('props = ', props)

    }

    return (
            // <div className="_card" >
            // <div className={props.flag ? '_card active' : '_card'} onClick={() => props.flag ? {setFlag:true} : {setFlag:false}}>
            <div className={flag ? '_card active' : '_card'} onClick={toggleHandler}>
                <Link to={props.page}>
                    <img src={props.img} alt={props.title} className="grey-image"/>
                    <div className="card__name">
                        {props.title}
                    </div>
                        {/*{console.log ('flag = ', flag)}*/}
                </Link>
            </div>
        // </div>
    )
}

    export default Item