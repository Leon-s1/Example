import React, {useEffect, useState} from 'react';
import '../src/style/style.css';
import {BrowserRouter} from "react-router-dom";
import ItemList from "./components/ItemList";
import {observer} from "mobx-react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import AdminButtons from "./components/AdminButtons";


const App = observer(() => {
    const [users, setUsers] = useState(false);
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            getUsers();
            setLoading(false)
        }, 0)
    }, []);

    function getUsers() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setUsers(data);
            });
    }

    const user = localStorage.getItem('user.isAdmin')

    return (
        <BrowserRouter>
            <Header/>
            <div className="main">
                <div className='list'>
                    {loading}
                    <>
                        <div className="row__card">
                            <ItemList/>
                        </div>
                        {user ? <AdminButtons/> : <></>
                        }
                        <AppRouter/>
                    </>
                </div>
            </div>
        </BrowserRouter>
    )
})
export default App

