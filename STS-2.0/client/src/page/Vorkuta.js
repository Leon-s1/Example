import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import Table from "../components/Table";

const Vorkuta = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);

    useEffect(() => {
        setTimeout(() => {
            getUsersCity();
            setLoading(false)
        }, 2000)
    }, []);

    function getUsersCity() {
        let city = 'ВРКТ'
        fetch(`http://localhost:3001/users/${city}`)
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
            });
    }

    return (
        <div>
            <h1>Воркута</h1>
            {loading && <Loader/>}
            {obj.length ? (
                <Table obj={obj}/>
            ) : null
            }
        </div>
    )
}

export default Vorkuta


