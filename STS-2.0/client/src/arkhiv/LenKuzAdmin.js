import React, {useEffect, useState} from "react";
import Table from "../components/Table.js";
import Loader from "../Loader";
import AdminButtons from "../components/AdminButtons";
import '../style/style.css'
import ItemList from "../components/ItemList";
import AppRouter from "../components/AppRouter";

const LenKuzAdmin = () => {
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
             <h1 className="">Справочник Ленинск-Кузнецкий Админ</h1>
                {loading && <Loader />}
                {users ? (
                    <>
                        {/*<div className="_row">*/}
                            {/*<ItemList/>*/}
                        {/*</div>*/}
                        <br/>
                        {/*<AppRouter/>*/}
                            <Table obj={obj} />
                    </>
                ) : loading ? null : (
                    'There is no merchant data available'
                )}
                {/*<AdminButtons />*/}
            </>
        )
}

export default LenKuzAdmin