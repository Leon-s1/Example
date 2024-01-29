import React, {useState} from "react";
import '../style/style.css'

// eslint-disable-next-line react/prop-types
const UpdateUser = ({active, setActive}) => {
// const UpdateUser = () => {
    // const [active, setActive] = useState(true)
    const [id, setId] = useState('');
    const [fio, setFio] = useState('');
    const [position, setPosition] = useState('');
    const [int_phone, setInt_phone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [skype, setSkype] = useState('');
    const [city, setCity] = useState('');
    console.log('active ', active)
    console.log('setActive ', setActive)


    function updateUser() {

        fetch(`http://localhost:3001/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id, fio, position, int_phone, mobile, email, skype, city}),

        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                setActive(false);

            })
            .catch(err => console.log(err));
    }


    // function handleSubmit(e) {
    //     e.preventDefault()
    // }


    return (
        <div className={active ? 'updatemodal active' : 'updatemodal'} onClick={() => setActive(false)}>
            <div className={active ? 'updatemodal__content active' : 'updatemodal__content'}
                 onClick={e => e.stopPropagation()}>

                <div className='modal-form'>
                    <form action='' onSubmit={updateUser}>
                        <h3>Редактировать сотрудника</h3>

                        <div>
                            <label>ID:
                            </label>
                            <input
                                type="text"
                                name="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                pattern=".{1,}" required
                                placeholder="Введите ID сотрудника"
                            />

                            <label>ФИО:
                            </label>
                            <input
                                type="text"
                                name="fio"
                                value={fio}
                                onChange={(e) => setFio(e.target.value)}
                                pattern=".{1,}" required
                                placeholder="Введите ФИО сотрудника"
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
                            <select
                                type="text"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                pattern=".{1,}" required
                            >
                                <option value="">Выберите Город</option>
                                <option value="ЛК">Ленинск-Кузнецкий</option>
                                <option value="НВКЗ">Новокузнецк</option>
                                <option value="МСК">Москва</option>
                                <option value="ВРКТ">Воркута</option>
                                <option value="НРЛСК">Норильск</option>
                                <option value="ШХТ">Шахты</option>
                                <option value="УРЛ">Урал (УГМК)</option>
                            </select>
                        </div>

                        <div className='btn-block'>
                            {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
                            <button type="submit" value="Изменить">Изменить
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>


    )
}

export default UpdateUser