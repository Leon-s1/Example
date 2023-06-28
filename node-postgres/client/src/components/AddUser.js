import React from "react";
import "./modal.css"


const AddUser = ({active, setActive, children}) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={ () => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

                {/*{children}*/}
                <div className='modal-form'>
                    <form action=''>
                        <label>id: <input type="text" name="id" /> </label>
                        <label>Имя: <input type="text" name="name" /> </label>
                        <label>Email: <input type="text" name="Email" /> </label>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>


            </div>
        </div>
    )
}
export default AddUser