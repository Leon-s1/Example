import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import BodyRow from "../components/BodyRow";

const Moscow = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);


    useEffect((obj) => {
        setTimeout(() => {
            getMerchantsLk();
            setLoading(false)
        }, 1000)
    }, []);

    function getMerchantsLk() {
        let city = 'МСК'
        fetch(`http://localhost:3001/users/${city}`)
            // {
            // method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            //  body: JSON.stringify({ city }),
            // })
            // fetch(`http://localhost:3001/users/`)
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
            <h1 className="">Справочник Москва </h1>
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


export default Moscow