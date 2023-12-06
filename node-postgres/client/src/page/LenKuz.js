import React, {useEffect, useState} from "react";
import BodyRow from "../components/BodyRow.js";
import Loader from "../Loader";
import ItemList from "../components/ItemList";
import AppRouter from "../components/AppRouter";
import Search from "../components/Search";

const LenKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);
    console.log('obj = ', obj)
    console.log('users = ', users)


    useEffect((obj) => {
        setTimeout(() => {
            getUsersCity();
            setLoading(false)
        }, 2000)
    }, []);

    function getUsersCity() {
        let city = 'ЛК'
        fetch(`http://localhost:3001/users/${city}`)
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
                // getMerchantsLk();
                // setModalActive(false)
            });
    }

    return (
            <>
             <h1 className="">Справочник Ленинск-Кузнецкий </h1>
                <Search/>
                {loading && <Loader />}

                {users ? (
                    <>

                            <BodyRow obj={obj} />
                    </>
                ) : loading ? null : (
                    'There is no merchant data available'
                )}
            </>
        )
}

export default LenKuz