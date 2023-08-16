import React from "react";

const BodyRow = ({obj}) => {
    const headTable = ["index", "id", "ФИО", "Должность", "Вн. телефон", "Моб. тел.", "Email", "Skype"];
    return (
    <>
        <div>

            {/*<div className="headTable">*/}
                {/*{headTable.map((element, index) => {*/}
                {/*    return (*/}
                {/*        <table>*/}
                                 {/*<colgroup span="8"></colgroup>*/}
                                 <thead>
                                     <tr>
                                        <th className="index">index</th>
                                     </tr>
                                     <tr>
                                        <th className="id">id</th>
                                     </tr>
                                     <tr>
                                        <th className="fio">ФИО</th>
                                     </tr>
                                     <tr>
                                        <th className="position">Должность</th>
                                     </tr>
                                     <tr>
                                        <th className="int_phone">Вн.</th>
                                     </tr>
                                     <tr>
                                        <th className="mobile">Мобил</th>
                                     </tr>
                                     <tr>
                                        <th className="email">Email</th>
                                     </tr>
                                     <tr>
                                        <th className="skype">Skype</th>
                                     </tr>

                                 </thead>
                        {/*</table>*/}
                    {/*)*/}
                {/*})*/}
                {/*}*/}
            {/*</div>*/}
        </div>



    <div>
        {Object.values(obj).map((value, index) => {
                return (
                    <table>
                        {/*<colgroup span="8"></colgroup>*/}

                        <tbody>
                                    <tr>
                                        <td className="index" key={index}>{index}</td>
                                        <td className="id">{value.id}</td>
                                        <td className="fio">{value.fio}</td>
                                        <td className="position">{value.position}</td>
                                        <td className="int_phone">{value.int_phone}</td>
                                        <td className="mobile">{value.mobile}</td>
                                        <td className="email">{value.email}</td>
                                        <td className="skype">{value.skype}</td>
                                    </tr>
                        </tbody>

                    </table>
                );
            })}
        </div>
        </>

    )
}

export default BodyRow
