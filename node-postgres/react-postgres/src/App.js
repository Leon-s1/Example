import React, {useState, useEffect} from 'react';
import './style.css';

function App() {
    const [merchants, setMerchants] = useState(false);
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



    }, [merchants]);

    function getMerchant() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMerchants(data);
            });
    }
    function createMerchant() {
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');
        fetch('http://localhost:3001/merchants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
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
        let id = prompt('Enter merchant id');
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




    let res = Array.from(merchants).map(item => {
        return ( <p key={item.id}>
            <span>{item.id}</span>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email}</span>
        </p>
        )
    });


    //
    // ;
    // // let arr = Array.from(merchants);
    // for (let user of Object.values(merchants)) {
    //     s += `<div class="divTableRow">`;
    //     for (let e of Object.values(user))
    //         s += `<div class="divTableCell">${e}</div>`;
    //     s += `</div>`;
    // }
    // s += `</div></div>`;
    //
    // document.querySelector('.wrapper').insertAdjacentHTML('beforeend', s);

    return (
        <div>
            {merchants ? merchants : 'There is no merchant data available'}
            <br/>
            <br/>
            {/*<div>*/}
            {/*    <h3>Имя: {merchants}</h3>*/}
            {/*    <h3>Возраст: {merchants.email}</h3>*/}
            {/*</div>*/}

            {/*let s = `<div class="divTable"><div class="divTableHeading"><div class="divTableRow">`;*/}

            <div className="headTable">
                {headTable.map((element, index) => {
                    return (
                        <table>
                            <tr>
                                <td key={index}>{element}</td>
                            </tr>
                        </table>
                        // <p key={index}>{element}</p>
                        // console.log(element);
                        )
                })}
            </div>


            {Object.values(obj).map((value, index) => {
                return (
                    <div key={index}>
                        <div className='bodyTable'>
                        {/*<h2>id: {index} Имя: {value.name} Email: {value.email} </h2>*/}
                        <table>
                            <tr>
                                <td>{index}</td>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                            </tr>
                        </table>
                        {/*<p>{index}</p>*/}
                        {/*<p>{value.name}</p>*/}
                        {/*<p>{value.email}</p>*/}
                        </div>


                    </div>
                );
            })}



            {/*<div>*/}
            {/*    {merchants.map((element, index) => {*/}
            {/*        return (*/}
            {/*            <div key={index}>*/}
            {/*                <h2>{element}</h2>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    })}*/}

            {/*    <button*/}
            {/*        onClick={() => setMerchants(['Alice', 'Bobby', 'Carl'])}*/}
            {/*    >*/}
            {/*        Update state*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*);*/}
            {/*};*/}



            {/*<div className="wrapper">*/}
            {/*    {res}*/}
            {/*</div>*/}


            {/*<button onClick={getMerchant}>{merchants ? merchants : 'There is no merchant data available'}</button>*/}
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

