import React, {useState, useEffect} from 'react';
import './style.css';
import {getMerchant, createMerchant, deleteMerchant, updateMerchant} from "./http/userAPI.js";
import TableRow from "./components/TableRow.js";
import BodyRow from "./components/BodyRow.js";
import AddUser from "./components/AddUser";

function App() {
    const [merchants, setMerchants] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    // let Students = [],
    //     submitbtn = document.querySelector('#submit'),
       let table = document.getElementById('table');
    // let arr = Array.from(merchants);
    const obj = JSON.parse(merchants);
    const headTable = ["index", "id", "Имя", "Email"];


    useEffect(() => {
        getMerchant();
        // let arr = toparseJson();

        console.log(merchants);
        console.log(typeof (merchants));
        console.log(typeof (obj));
        console.log(obj);
        console.log({AddUser})



    }, []);



    return (
        <div className='list'>
            <br/>
            <br/>
            {merchants ? (
                <>
                    <TableRow />
                    <BodyRow obj={obj} />
                </>
                ) : 'There is no merchant data available'}
            <br/>
            <br/>

            <AddUser active={modalActive} setActive={setModalActive}>

                {/*/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa minus nulla qui unde. Amet at consequuntur enim eos iusto, libero nemo nulla officiis porro quis quo rerum ullam vel.100</p>*!/*/}

            </AddUser>

            <br/>
            <button onClick={() => setModalActive(true)}>Add merchant</button>
            <br/>
            <button onClick={createMerchant}>Add merchant</button>
            <br/>
            <button onClick={deleteMerchant}>Delete merchant</button>
            <br/>
            <button onClick={updateMerchant}>Update merchant</button>
            <br/>

            {/*<br/>*/}
            {/*<button onClick={getTable(table, merchants)}>getTable</button>*/}
        </div>

    );
}
export default App;

