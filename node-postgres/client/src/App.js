import React, {useState, useEffect} from 'react';
import './style.css';
// import {getMerchant, createMerchant, deleteMerchant, updateMerchant} from "./http/userAPI.js";
import TableRow from "./components/TableRow.js";
import BodyRow from "./components/BodyRow.js";
import AddUser from "./components/AddUser";
import Loader from "./Loader";

function App() {
    const [merchants, setMerchants] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [loading, setLoading] = React.useState(true)
    // let Students = [],
    //     submitbtn = document.querySelector('#submit'),
       let table = document.getElementById('table');
    // let arr = Array.from(merchants);
    const obj = JSON.parse(merchants);
    // const headTable = ["index", "id", "Имя", "Email"];

    useEffect((obj) => {

        // getMerchant();
        // <BodyRow obj={obj} />

        setTimeout(() => {
            getMerchant();
            <BodyRow obj={obj} />
            setLoading(false)
        }, 2000)


        // let arr = toparseJson();

        // console.log(merchants);
        // console.log(typeof (merchants));
        // console.log(typeof (obj));
        // console.log(obj);
        // console.log({AddUser})
    }, []);

    function getMerchant() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                    setMerchants(data);
                // setModalActive(false)
            });
    }

    function createMerchant() {
        // event.preventDefault()
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');
        // let name = name;
        // let email = email;
        fetch('http://localhost:3001/merchants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
            // body: JSON.stringify({event}),

        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                // setModalActive(false)
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt('Enter merchant id');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            })
        // .catch(err => console.log(err));
    }

    function updateMerchant() {
        let id = prompt('Enter merchant index');
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            })
    }

    return (
        <div className='list'>
            <br/>
            <br/>

            {/*<React.Suspense fallback={<Loader />}>*/}
            {/*    <AddUser active={modalActive} setActive={setModalActive} />*/}
            {/*</React.Suspense>*/}

            {loading && <Loader />}
            {merchants ? (
                <>
                     <BodyRow obj={obj} />
                </>
                ) : loading ? null : (
                'There is no merchant data available'
            )}

            <br/>
            <br/>

            <AddUser active={modalActive} setActive={setModalActive} />


            <br/>
            <button onClick={() => setModalActive(true)}>Add merchant</button>
            <br/>
            {/*<button onClick={createMerchant}>Add merchant</button>*/}
            <br/>
            <button onClick={deleteMerchant}>Delete merchant</button>
            <br/>
            <button onClick={updateMerchant}>Update merchant</button>
            <br/>

            <br/>
            {/*<button onClick={getTable(table, merchants)}>getTable</button>*/}
        </div>

    );
}
export default App;

