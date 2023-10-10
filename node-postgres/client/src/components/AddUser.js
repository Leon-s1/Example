import React, {useEffect, useState} from "react";
import "./modal.css"
import {getMerchant} from "../App";


const AddUser = ({active, setActive}) => {
    const [users, setUsers] = useState(false);
    const [fio, setFio] = useState('');
    const [position, setPosition] = useState('');
    const [int_phone, setInt_phone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [skype, setSkype] = useState('');
    const [city, setCity] = useState('');

        function createUser() {
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
            // console.log(fio, email);
        }

    function handleSubmit(e) {
        e.preventDefault() // останавливаем перезагрузку страницы по умолчанию
        console.log(fio, email);
    }

        return (
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                    {/*{children}*/}
                    <div className='modal-form'>
                        <form action='' onSubmit={createUser}>
                            <h3>Добавление сотрудника</h3>

                           <div>
                            <label>ФИО:
                            </label>
                                <input
                                    type="text"
                                    name="fio"
                                    value={fio}
                                    onChange={(e) => setFio(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Должность:
                            </label>
                                <input
                                    type="text"
                                    name="position"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Вн.номер:
                            </label>
                                <input
                                    type="text"
                                    name="int_phone"
                                    value={int_phone}
                                    onChange={(e) => setInt_phone(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Моб.телефон:
                            </label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Email:
                            </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Skype:
                            </label>
                                <input
                                    type="text"
                                    name="skype"
                                    value={skype}
                                    onChange={(e) => setSkype(e.target.value)}
                                    pattern=".{1,}" required
                                />
                            <label>Город:
                            </label>
                                {/*<input*/}
                                {/*    type="text"*/}
                                {/*    name="city"*/}
                                {/*    value={city}*/}
                                {/*    onChange={(e) => setCity(e.target.value)}*/}
                                {/*    pattern=".{1,}" required*/}
                                {/*/>*/}
                               <select
                                   // name="lang"
                                   // value={lang}
                                   // onChange={(e) => setLang(e.target.value)}
                                   type="text"
                                   name="city"
                                   value={city}
                                   onChange={(e) => setCity(e.target.value)}
                                   pattern=".{1,}" required
                                   // onBlur={this.validateField}
                               >
                                   <option value="">Выберите Город</option>
                                   <option value="ЛК">Ленинск-Кузнецкий</option>
                                   <option value="НВКЗ">Новокузнецк</option>
                                   <option value="МСК">Москва</option>
                               </select>
                           </div>
                            <div className='btn-block'>
                                <button type="submit" value="Добавить">Добавить
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        )
    // {merchants}

}
export default AddUser