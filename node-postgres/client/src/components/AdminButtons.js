import React, {useState} from 'react';
import AddUser from "./AddUser";
import DelUser from "./DelUser";
import UpdateUser from "./UpdateUser";

const AdminButtons = () => {
    const [addmodalActive, setAddmodalActive] = useState(false);
    const [updatemodalActive, setUpdatemodalActive] = useState(false);
    const [delmodalActive, setDelmodalActive] = useState(false);


    return (
        <div className="admin__panel">
            <h2>Панель управления</h2>
            <div className='admin__buttons'>
                <AddUser active={addmodalActive} setActive={setAddmodalActive}/>
                <DelUser active={delmodalActive} setActive={setDelmodalActive}/>
                <UpdateUser active={updatemodalActive} setActive={setUpdatemodalActive}/>

                <button onClick={() => setAddmodalActive(true)}>Добавить сотрудника</button>
                <button onClick={() => setUpdatemodalActive(true)}>Редактировать сотрудника</button>
                <button onClick={() => setDelmodalActive(true)}>Удалить сотрудника</button>
            </div>
        </div>
    );
};

export default AdminButtons;