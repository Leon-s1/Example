import React, {useEffect, useState} from "react"
import Table from "../components/Table.js";
import Loader from "../Loader";

const LenKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);

    useEffect(() => {
        setTimeout(() => {
            getUsersCity();
            setLoading(false)
        }, 1500)
    }, []);

    function getUsersCity() {
        let city = 'ЛК'
        fetch(`http://localhost:3001/users/${city}`)
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
            });
    }

    return (
        <>
            <h1>Ленинск-Кузнецкий </h1>
            {loading && <Loader/>}
            {obj != 0 ? (
                <Table obj={obj}/>
            ) : loading ? null : (
                <></>
            )}
        </>
    )
}

export default LenKuz