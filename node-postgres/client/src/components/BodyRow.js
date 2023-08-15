import React from "react";

const BodyRow = ({obj}) => {
    const headTable = ["index", "id", "ФИО", "Должность", "Вн. телефон", "Моб. тел.", "Email", "Skype"];
    return (
    <>
        <div>

            <div className="headTable">
                {headTable.map((element, index) => {
                    return (
                        <table>
                                 {/*<colgroup span="8"></colgroup>*/}
                                 <thead>
                                     <tr>
                                        <th key={index}>{element}</th>
                                     </tr>
                                 </thead>
                        </table>
                    )
                })
                }
            </div>
        </div>



    <div>
        {Object.values(obj).map((value, index) => {
                return (
                    <table>
                        {/*<colgroup span="8"></colgroup>*/}

                        <tbody>
                                    <tr>
                                        <td key={index}>{index}</td>
                                        <td>{value.id}</td>
                                        <td>{value.fio}</td>
                                        <td>{value.position}</td>
                                        <td>{value.int_phone}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.email}</td>
                                        <td>{value.skype}</td>
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
