import React, {useState, useEffect} from 'react';
import '../src/style/style.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
// import {getMerchant, createMerchant, deleteMerchant, updateMerchant} from "./http/userAPI.js";
// import TableRow from "./components/TableRow.js";
// import Table from "./components/Table.js";
// import AddUser from "./components/AddUser";
// import DelUser from "./components/DelUser";
// import UpdateUser from "./components/UpdateUser"
// import Loader from "./Loader";
import ItemList from "./components/ItemList";
// import LenKuz from "./page/LenKuz";
import {observer} from "mobx-react";
// import NavBar from "./components/NavBar.js";
import Header from "./components/Header";
import AdminButtons from "./components/AdminButtons";
// import Search from "./components/Search";


const App = observer(() => {
    const [users, setUsers] = useState(false);
    // const [addmodalActive, setAddmodalActive] = useState(false);
    // const [delmodalActive, setDelmodalActive] = useState(false);
    // const [updatemodalActive, setUpdatemodalActive] = useState(false);
    const [loading, setLoading] = React.useState(true)
    // const [flag, setFlag] = useState(false)

    // let Students = [],
    //     submitbtn = document.querySelector('#submit'),
    //    let table = document.getElementById('table');
    // let arr = Array.from(merchants);
    // const obj = JSON.parse(users);
    // const headTable = ["index", "id", "Имя", "Email"];
    // const navigate = useNavigate()

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
                // setModalActive(false)
            });
    }
    const user = localStorage.getItem('user.isAdmin')
    console.log('user =', user)


    return (

        <BrowserRouter>
        <Header/>
    <div className="main">
        <br/>


            <div className='list'>
                <br/>
                <br/>
                {/*{loading && <Loader />}*/}
                {loading }

                <>

                    <div className="_row">
                        <ItemList />
                    </div>


                    {user ?

                    // <Search obj={obj}/>
                        <AdminButtons/>

                     :
                        <></>

                    }

                    <br/>
                    <AppRouter/>

                    {/*<Table obj={obj} />*/}
                </>


            </div>

    </div>
        </BrowserRouter>



    )
})
export default App

