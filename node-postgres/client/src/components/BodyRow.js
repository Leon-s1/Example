import React from "react";

const BodyRow = ({obj}) => {
    const headTable = ["index", "id", "ФИО", "Должность", "Вн. телефон", "Моб. тел.", "Email", "Skype"];

    return (
    <table className="table">
            <div className="table__header">


                                     {/*<thead>*/}
                                         <tr>
                                            {/*<th className="index">idx</th>*/}
                                            {/*<th className="id">id</th>*/}
                                            <th className="fio">ФИО</th>
                                            <th className="position">Должность</th>
                                            <th className="int_phone">Вн. тел.</th>
                                            <th className="mobile">Мобильный</th>
                                            <th className="email">Email</th>
                                            <th className="skype">Skype</th>
                                         </tr>

                                     {/*</thead>*/}
                            {/*</table>*/}
                        {/*)*/}
                    {/*})*/}
                    {/*}*/}
                {/*</div>*/}
            </div>



        <div>
            {Object.values(obj).map((value, index) => {
                return (
                        <>
                            <tr>
                                {/*<td className="index" key={index}>{index}</td>*/}
                                {/*<td className="id">{value.id}</td>*/}
                                <td className="fio">{value.fio}</td>
                                <td className="position">{value.position}</td>
                                <td className="int_phone">{value.int_phone}</td>
                                <td className="mobile">{value.mobile}</td>
                                <td className="email">{value.email}</td>
                                <td className="skype">{value.skype}</td>
                            </tr>
                        </>
                    );
            })}
        </div>
    </table>

    )
}

export default BodyRow
