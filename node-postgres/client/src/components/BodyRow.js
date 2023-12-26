import React, {Fragment, useState} from "react";

// eslint-disable-next-line react/prop-types
const BodyRow = ({obj}) => {

    const userAuth = localStorage.getItem('user.isAdmin')
    // const values = Object.values(obj)
    const [searched, setSearched] = useState("")
    // const [rows, setRows] = useState(values)
    const [users, setUsers] = useState(obj)
    console.log('obj из bodyrow', typeof (obj), obj)
    console.log('rows из bodyrow', typeof (users), users)

    const filteredUsers = users.filter(user => {
        return user.fio.toLowerCase().includes(searched.toLowerCase()) ||
               user.position.toLowerCase().includes(searched.toLowerCase())
    })
    const cancelSearch = () => {
        setSearched('')
        // requestSearch(searched)
    }

    return (
    <div>
        <div className='search'>
            <input className='search-input'
                   // autoFocus
                   type="text"
                   placeholder="Введите фамилию сотрудника..."
                   value={searched}
                   onChange={(searchVal) => setSearched(searchVal.target.value)}
                   // onCancelSearch={() => cancelSearch()}
            />
            <span className="close" onClick={() => cancelSearch()}></span>
        </div>

        <table className="table">
            <div className="table__header">
                <tr>
                     {userAuth ? <th className="id">id</th> : <></>}
                    <th className="fio">ФИО</th>
                    <th className="position">Должность</th>
                    <th className="int_phone">Вн. тел.</th>
                    <th className="mobile">Мобильный</th>
                    <th className="email">Email</th>
                    <th className="skype">Skype</th>
                </tr>
            </div>

        <div>
            {filteredUsers.map((value) => {
                return (
                    <Fragment key={value.id}>
                            <tr>
                                {userAuth ? <td className="id">{value.id}</td> : <></>}
                                <td className="fio">{value.fio}</td>
                                <td className="position">{value.position}</td>
                                <td className="int_phone">{value.int_phone}</td>
                                <td className="mobile">{value.mobile}</td>
                                <td className="email">{value.email}</td>
                                <td className="skype">{value.skype}</td>
                            </tr>
                    </Fragment>
                    );
            })}
        </div>
    </table>

    </div>

    )
}

export default BodyRow
