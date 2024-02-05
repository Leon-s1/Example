import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../src/style/style.css'

import { NavLink } from "react-router-dom";

const Item = (item) => {
    // const [activeItem, setActiveItem] = useState(null)
    return (
        <Link to={item.page}>
            <img src={item.img} alt={item.title} className="grey-image"/>
                        <div className="card__name">
                            {item.title}
                        </div>
                    </Link>

            // </div>
            )
                // {/*</div>*/}



}

    export default Item