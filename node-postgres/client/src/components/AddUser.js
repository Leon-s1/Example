import React, {useEffect, useState} from "react";
import "./modal.css"
// import {getMerchant} from "../App";


const AddUser = ({active, setActive}) => {
    const [users, setUsers] = useState(false);
    const [fio, setFio] = useState('');
    const [position, setPosition] = useState('');
    const [int_phone, setInt_phone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [skype, setSkype] = useState('');
    const [city, setCity] = useState('');


        // useEffect(() => {
        //     getMerchant();
        // }, []);

        // function getMerchant() {
        //     fetch('http://localhost:3001')
        //         .then(response => {
        //             return response.text();
        //         })
        //         .then(data => {
        //             setUsers(data);
        //         });
        // }

        function createMerchant(event) {
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({fio, position, int_phone, mobile, email, skype, city}),
            })
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    alert(data);
                    setActive(false)
                    // getMerchant();

                });
            console.log(fio, email);
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
        console.log(fio, email);
    }

        return (
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                    {/*{children}*/}
                    <div className='modal-form'>
                        <form action='' onSubmit={createMerchant}>

                           <div>
                            <label>ФИО:
                                <input
                                    type="text"
                                    name="fio"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}
                                />
                            </label>
                            <label>Должность:
                                <input
                                    type="text"
                                    name="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </label>
                            <label>Вн.номер:
                                <input
                                    type="text"
                                    name="int_phone"
                                    value={int_phone}
                                    onChange={(e) => setInt_phone(e.target.value)}
                                />
                            </label>
                            <label>Моб.телефон:
                                <input
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
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
                            <label>Skype:
                                <input
                                    type="text"
                                    name="skype"
                                    value={skype}
                                    onChange={(e) => setSkype(e.target.value)}
                                />
                            </label>
                            <label>Город:
                                <input
                                    type="text"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </label>
                           </div>
                            <div className='btn-block'>
                                <input type="submit" value="Добавить"/>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        )
    // {merchants}

}
export default AddUser