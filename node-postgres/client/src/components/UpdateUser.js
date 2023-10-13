import React, {useState} from "react";
import '../style/style.css'

const UpdateUser = ({active, setActive}) => {
    const [fio, setFio] = useState('');
    const [position, setPosition] = useState('');
    const [int_phone, setInt_phone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [skype, setSkype] = useState('');
    const [city, setCity] = useState('');

    function updateUser() {

        fetch(`http://localhost:3001/users/${fio}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fio, position, int_phone, mobile, email, skype, city}),
            // console.log ({fio})
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                setActive(false);
                // getUsers();
            })
            .catch(err => console.log(err));
    }

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <div className={active ? 'updatemodal active' : 'updatemodal'} onClick={() => setActive(false)}>
            <div className={active ? 'updatemodal__content active' : 'updatemodal__content'} onClick={e => e.stopPropagation()}>

                <div className='modal-form'>
                    <form action='' onSubmit={updateUser}>
                        <h3>Редактировать контакт</h3>

                        <div>
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
                        </div>

                        <div className='btn-block'>
                            {/*<button onClick={(e) => {setActive(false); handleSubmit(e)}}>Отменить</button>*/}
                            <button type="submit" value="Удалить">Удалить
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>




    )
}

export default UpdateUser