import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import Table from "../components/Table";

const NovoKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);

    useEffect((obj) => {
        setTimeout(() => {
            getUsersCity();
            setLoading(false)
        }, 2000)
    }, []);

    function getUsersCity() {
        let city = 'НВКЗ'
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
            <h1>Новокузнецк </h1>
            {loading && <Loader/>}
            {obj != 0 ? (
                <Table obj={obj}/>
            ) : loading ? null : (
                <h1>В справочнике нет данных.</h1>
            )}
        </>
    )
}

export default NovoKuz