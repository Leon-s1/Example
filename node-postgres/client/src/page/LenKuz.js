import React, {useEffect, useState} from "react";
import BodyRow from "../components/BodyRow.js";
import Loader from "../Loader";
import ItemList from "../components/ItemList";
import AppRouter from "../components/AppRouter";

const LenKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);

    useEffect((obj) => {
        setTimeout(() => {
            getMerchant();
            setLoading(false)
        }, 2000)
    }, []);

    function getMerchant() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
                // setModalActive(false)
            });
    }

    return (
            <>
             <h1 className="">Справочник Ленинск-Кузнецкий </h1>
                {loading && <Loader />}
                {users ? (
                    <>
                        <div className="_row">
                            {/*<ItemList/>*/}
                        </div>
                        <br/>
                        {/*<AppRouter/>*/}
                        <BodyRow obj={obj} />
                    </>
                ) : loading ? null : (
                    'There is no merchant data available'
                )}
            </>
        )
}

export default LenKuz