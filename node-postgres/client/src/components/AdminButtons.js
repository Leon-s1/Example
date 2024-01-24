import React, {useState} from 'react';
import AddUser from "./AddUser";
import DelUser from "./DelUser";
import UpdateUser from "./UpdateUser";

const AdminButtons = () => {
    const [addmodalActive, setAddmodalActive] = useState(false);
    const [updatemodalActive, setUpdatemodalActive] = useState(false);
    const [delmodalActive, setDelmodalActive] = useState(false);


    return (
        <>
            <h2>Редактирование сотрудника</h2>
                <div className='buttons__admin'>
                    <AddUser active={addmodalActive} setActive={setAddmodalActive} />
                    <DelUser active={delmodalActive} setActive={setDelmodalActive} />
                    <UpdateUser active={updatemodalActive} setActive={setUpdatemodalActive} />

                    <button onClick={() => setAddmodalActive(true)}>Добавить сотрудника</button>
                    <button onClick={() => setUpdatemodalActive(true)}>Редактировать сотрудника</button>
                    <button onClick={() => setDelmodalActive(true)}>Удалить сотрудника</button>
                </div>
            </>
    );
};

export default AdminButtons;