import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../src/style/style.css'

import { NavLink } from "react-router-dom";

const Item = (props) => {
    // const [flag, setFlag] = useState(props.flag)
    const [activeItem, setActiveItem] = useState(null)




    // const isActive =  () => {
    //         setFlag (true)
    //     }

    // function handlClick(props) {
    //     // e.preventDefault();
    //     // (e.target.classList.contains("active") === true) ? e.target.classList.remove("active") : e.target.classList.add("active");
    //     // flag ? {setFlag:true} : {setFlag:false}
    //     // !flag ? setFlag(true) : setFlag(true)
    //     console.log ('props.flag = ', props.id)
    //     setActiveItem(props.id)
    //     // console.log ('props = ', props)
    // }
    // const items = [props.title, props.img, props.page]

    return (
            // <div className="_card" >
               /*<div className={props.flag ? '_card active' : '_card'} onClick={() => props.flag ? {setFlag:true} : {setFlag:false}}>*/

                /*<div className={activeItem === props.id ? '_card active' : '_card'} onClick={() => handlClick(props.id)}>*/

                    <Link to={props.page}>
                        <img src={props.img} alt={props.title} className="grey-image"/>
                        <div className="card__name">
                            {props.title}
                        </div>
                    </Link>

            // </div>
            )
                // {/*</div>*/}



}

    export default Item