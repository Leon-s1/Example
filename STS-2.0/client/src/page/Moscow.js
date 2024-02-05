import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import Table from "../components/Table";

const Moscow = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);
    console.log('из файла Москва users', users)

    useEffect((obj) => {
        setTimeout(() => {
            getUsersCity();
            setLoading(false)
        }, 2000)
    }, []);

    function getUsersCity() {
        let city = 'МСК'
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
            <h1>Москва </h1>
            {loading && <Loader/>}
            {users ? (
                <>
                    <Table obj={obj}/>
                </>
            ) : loading ? null : (
                'В справочнике нет данных'
            )}
        </>
    )
}

export default Moscow