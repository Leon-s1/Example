import React, {Fragment, useState} from "react";

// eslint-disable-next-line react/prop-types
const BodyRow = ({obj}) => {

    const user = localStorage.getItem('user.isAdmin')
    // const values = Object.values(obj)
    const [searched, setSearched] = useState("")
    // const [rows, setRows] = useState(values)
    const [rows, setRows] = useState(obj)
    console.log('obj из bodyrow', typeof (obj), obj)
    console.log('rows из bodyrow', typeof (rows), rows)

    const filteredRows = rows.filter(row => {
        return row.fio.toLowerCase().includes(searched.toLowerCase()) ||
               row.position.toLowerCase().includes(searched.toLowerCase())
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
        </div>

        <table className="table">
            <div className="table__header">
                <tr>
                     {user ? <th className="id">id</th> : <></>}
                    <th className="fio">ФИО</th>
                    <th className="position">Должность</th>
                    <th className="int_phone">Вн. тел.</th>
                    <th className="mobile">Мобильный</th>
                    <th className="email">Email</th>
                    <th className="skype">Skype</th>
                </tr>
            </div>

        <div>
            {filteredRows.map((value) => {
                return (
                    <Fragment key={value.id}>
                            <tr>
                                {user ? <td className="id">{value.id}</td> : <></>}
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
