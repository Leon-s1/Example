import React, {useState} from "react";
import '../style/style.css'

const DelUser = ({active, setActive}) => {
    const [id, setId] = useState('');

    function deleteUser() {
        // let id = prompt('Enter user id');
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
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
        <div className={active ? 'delmodal active' : 'delmodal'} onClick={() => setActive(false)}>
            <div className={active ? 'delmodal__content active' : 'delmodal__content'} onClick={e => e.stopPropagation()}>

                <div className='modal-form'>
                    <form action='' onSubmit={deleteUser}>
                        <h3>Удалить сотрудника</h3>

                        <div>
                            <label>ID:
                            </label>
                            <input
                                type="text"
                                name="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                pattern=".{1,}" required
                                placeholder="Введите id сотрудника"
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

export default DelUser