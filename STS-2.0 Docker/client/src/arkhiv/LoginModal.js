import React, {useContext, useState} from 'react';
import {AppContext} from "../components/AppContex";
import {useNavigate} from "react-router-dom";
// import bcrypt from 'bcrypt'


const LoginModal = (active, setActive) => {
    const {user} = useContext(AppContext)
    const navigate = useNavigate()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()

        const email = event.target.email.value.trim()
        console.log('email = ', email)

        const password = event.target.password.value.trim()
        console.log('password = ', password)

        // const data = await loginmodal(email, password) // в data приходит true если проверка прошла успешно
        const data = getByEmail(email) // в data приходит true если проверка прошла успешно
        console.log('data из handlsubmit = ', data)

        if (data) {
            user.login(data)
            if (user.isAdmin) navigate('/admin')
            if (user.isAuth) navigate('/user')
        }
    }

    function getByEmail(email) {

        fetch(`http://localhost:3001/users/${email}`, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({ email }),
        })
            .then(response => {
                return response.text();
                // console.log('response ', response.text())
            })
            .then(data => {
                alert(data);
                console.log('data из getByEmail = ', data)
                // const user = JSON.stringify(data)
                // console.log('JSON data из getByEmail = ', user.email)

                // console.log('data = ', data) // получил данные из таблицы, теперь их надо сравнить с введенными при авторизации

                // (email === data.email) ? console.log("email = data", email, data.email)
                // : console.log("email не равно data", email, data.email)
                setActive(false)
            });
        // console.log(fio, email);
    }


    // async function loginmodal(req, res, next) {
    // res.status(200).send('Вход в личный кабинет')
    // try {
    //     const {email, password} = req.body
    //     const user = await getByEmail(email) // получить user из базы данных
    //     console.log('controller user = ', user)
    // let compare = bcrypt.compareSync(password, user.password) //если сравнение введенного email == email в БД, то данные возвращаются в data
    // if (!compare) {
    //     throw new Error('Указан неверный пароль')
    // }
    // const token = makeJwt(user.id, user.email, user.role) // возвращается в data на страницу login.js
    // return res.json({user})
    // } catch (e) {
    //     console.log(e.response.data.message)
    // }
    // }


    return (
        <div className={active ? 'loginmodal active' : 'loginmodal'} onClick={() => setActive(false)}>
            <div className={active ? 'loginmodal__content active' : 'loginmodal__content'}
                 onClick={e => e.stopPropagation()}>

                {/*{children}*/}
                <div className='modal-form'>
                    <form action='node-postgres/client/src/arkhiv/LoginModal' onSubmit={handleSubmit}>
                        <h3> Авторизация</h3>
                        <div>
                            <label>Email:
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern=".{1,}" required
                                placeholder='Введите ваш email...'
                            />
                            <label>Password:
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                pattern=".{1,}" required
                                placeholder='Введите ваш пароль...'
                            />

                        </div>
                        <div className='btn-block'>
                            {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
                            {/*<button onClick={(e) => setActive(false)}>Отменить</button>*/}
                            <button type="submit" value="Добавить">Войти
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default LoginModal;