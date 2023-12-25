import React, {useEffect, useState} from "react";
import BodyRow from "../components/BodyRow.js";
import Loader from "../Loader";
import ItemList from "../components/ItemList";
import AppRouter from "../components/AppRouter";
import Search from "../components/Search.js";

const LenKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);
    // const obj = Object.values(users)
    console.log('obj из Ленкуз= ', typeof (obj), obj)
    console.log('users из Ленкуз= ', typeof (users), users)


    useEffect(() => {
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