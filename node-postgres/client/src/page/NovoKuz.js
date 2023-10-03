import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import BodyRow from "../components/BodyRow";

const NovKuz = () => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)
    const obj = JSON.parse(users);


    useEffect((obj) => {
        setTimeout(() => {
            getMerchantsCity();
            setLoading(false)
        }, 2000)
    }, []);

    function getMerchantsCity() {
        let city = 'НВКЗ'
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
        <h1 className="">Справочник Новокузнецк </h1>
        {loading && <Loader />}
        {users ? (
            <>
                {/*<div className="_row">*/}
                {/*<ItemList/>*/}
                {/*</div>*/}
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

export default NovKuz