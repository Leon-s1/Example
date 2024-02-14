import React, {useState} from "react";
import '../style/style.css'

// eslint-disable-next-line react/prop-types
const DelUser = ({active, setActive}) => {
    const [id, setId] = useState('');

    function deleteUser() {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
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

    return (
        <div className={active ? 'delmodal active' : 'delmodal'} onClick={() => setActive(false)}>
            <div className={active ? 'delmodal__content active' : 'delmodal__content'}
                 onClick={e => e.stopPropagation()}>

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