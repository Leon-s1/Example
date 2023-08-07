import React, {useEffect, useState} from "react";
import "./modal.css"
// import {getMerchant} from "../App";


const AddUser = ({active, setActive, method}) => {
    const [merchants, setMerchants] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // function addUser() {
    //
    //     let newUser = {
    //         name: name,
    //         email: email
    //     };
    //     const obj = JSON.parse(merchants);

        useEffect(() => {
            getMerchant();
        }, []);

        function getMerchant() {
            fetch('http://localhost:3001')
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    setMerchants(data);
                });
        }

        function createMerchant(event) {
            // event.preventDefault();
            // console.log('name:', name);
            // console.log('email:', email);
            // let name = prompt('Enter merchant name');
            // let name = name;
            // let email = prompt('Enter merchant email');
            // let email = email;
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
                    setActive(false)
                    getMerchant();

                });
            console.log(name, email);
        }

        // function deleteMerchant() {
        //     let id = prompt('Enter merchant id');
        //     fetch(`http://localhost:3001/merchants/${id}`, {
        //         method: 'DELETE',
        //     })
        //         .then(response => {
        //             return response.text();
        //         })
        //         .then(data => {
        //             alert(data);
        //             getMerchant();
        //         })
        //     // .catch(err => console.log(err));
        // }
        //
        // function updateMerchant() {
        //     let index = prompt('Enter merchant index');
        //     let name = prompt('Enter merchant name');
        //     let email = prompt('Enter merchant email');
        //     fetch(`http://localhost:3001/merchants/${index}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({index, name, email}),
        //     })
        //         .then(response => {
        //             return response.text();
        //         })
        //         .then(data => {
        //             alert(data);
        //             getMerchant();
        //         })
        // }

    function handleSubmit(e) {
        e.preventDefault() // останавливаем перезагрузку страницы по умолчанию
        console.log(name, email);
    }

        return (
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                    {/*{children}*/}
                    <div className='modal-form'>
                        <form action='' onSubmit={createMerchant}>
                            {/*<label>id:*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="id"*/}
                            {/*        value={}*/}
                            {/*    />*/}
                            {/*</label>*/}
                            <label>Имя:
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>Email:
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <input type="submit" value="Отправить"/>
                        </form>
                    </div>


                </div>
            </div>
        )
    // {merchants}

}
export default AddUser