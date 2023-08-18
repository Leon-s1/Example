import React, {useState, useEffect} from 'react';
import '../src/style/style.css';
import {BrowserRouter, useNavigate, Route, NavLink } from "react-router-dom";
import AppRouter from "./components/AppRouter";
// import {getMerchant, createMerchant, deleteMerchant, updateMerchant} from "./http/userAPI.js";
import TableRow from "./components/TableRow.js";
import BodyRow from "./components/BodyRow.js";
import AddUser from "./components/AddUser";
import Loader from "./Loader";
import ItemList from "./components/ItemList";
import LenKuz from "./page/LenKuz";
import {observer} from "mobx-react";
import NavBar from "./components/NavBar.js";


const App = observer(() => {
    const [users, setUsers] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [loading, setLoading] = React.useState(true)
    // let Students = [],
    //     submitbtn = document.querySelector('#submit'),
    //    let table = document.getElementById('table');
    // let arr = Array.from(merchants);
    const obj = JSON.parse(users);
    // const headTable = ["index", "id", "Имя", "Email"];
    // const navigate = useNavigate()

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

    // function createMerchant() {
    //     // event.preventDefault()
    //     let fio = prompt('Enter merchant fio');
    //     let email = prompt('Enter merchant email');
    //     // let name = name;
    //     // let email = email;
    //     fetch('http://localhost:3001/merchants', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({fio, email}),
    //         // body: JSON.stringify({event}),
    //
    //     })
    //         .then(response => {
    //             return response.text();
    //         })
    //         .then(data => {
    //             alert(data);
    //             // setModalActive(false)
    //             getMerchant();
    //         });
    // }

    function deleteMerchant() {
        let id = prompt('Enter user id');
        fetch(`http://localhost:3001/users/${id}`, {
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

        <BrowserRouter>
            <NavBar />
            <AppRouter/>

            {/*<div className='list'>*/}
            {/*    <br/>*/}
            {/*<br/>*/}
            {/*{loading && <Loader />}*/}
            {/*{users ? (*/}
            {/*    <>*/}
            {/*        <div className="row">*/}
            {/*            <ItemList/>*/}
            {/*        </div>*/}
            {/*        <br/>*/}
            {/*         <BodyRow obj={obj} />*/}
            {/*    </>*/}
            {/*    ) : loading ? null : (*/}
            {/*    'There is no merchant data available'*/}
            {/*)}*/}

            {/*<br/>*/}
            {/*<br/>*/}

            {/*<AddUser active={modalActive} setActive={setModalActive} />*/}


            {/*<br/>*/}
            {/*<button onClick={() => setModalActive(true)}>Add merchant</button>*/}
            {/*<br/>*/}
            {/*/!*<button onClick={createMerchant}>Add merchant</button>*!/*/}
            {/*<br/>*/}
            {/*<button onClick={deleteMerchant}>Delete merchant</button>*/}
            {/*<br/>*/}
            {/*<button onClick={updateMerchant}>Update merchant</button>*/}

            {/*<button onClick={getTable(table, merchants)}>getTable</button>*/}

            {/*</div>*/}
        </BrowserRouter>


    );
})
export default App

