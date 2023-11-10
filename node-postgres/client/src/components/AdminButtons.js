import React, {useState} from 'react';
import AddUser from "./AddUser";
import DelUser from "./DelUser";
import UpdateUser from "./UpdateUser";

const AdminButtons = () => {
    const [addmodalActive, setAddmodalActive] = useState(false);
    const [delmodalActive, setDelmodalActive] = useState(false);
    const [updatemodalActive, setUpdatemodalActive] = useState(false);


    return (
        <div>
            <AddUser active={addmodalActive} setActive={setAddmodalActive} />
            <DelUser active={delmodalActive} setActive={setDelmodalActive} />
            <UpdateUser active={updatemodalActive} setActive={setUpdatemodalActive} />



            <br/>
            <button onClick={() => setAddmodalActive(true)}>Add user</button>
            <br/>
            {/*<button onClick={createMerchant}>Add merchant</button>*/}
            <br/>
            <button onClick={() => setDelmodalActive(true)}>Delete user</button>
            <br/>
            <button onClick={() => setUpdatemodalActive(true)}>Update user</button>
        </div>
    );
};

export default AdminButtons;