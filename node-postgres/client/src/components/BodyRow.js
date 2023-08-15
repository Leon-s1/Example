import React from "react";

const BodyRow = ({obj}) => {
    const headTable = ["index", "id", "ФИО", "Должность", "Вн. телефон", "Мобильный тел.", "Email", "Skype"];
    return (
    <>
        <div>

            <div className="headTable">
                {headTable.map((element, index) => {
                    return (
                        // <table>
                        //         <tr>
                                    <td key={index}>{element}</td>
                                // </tr>

                        // </table>
                    )
                })
                }
            </div>
        </div>



    <div>
        {Object.values(obj).map((value, index) => {
                return (

                            // <table>
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

                            // </table>
                );
            })}
        </div>
        </>

    )
}

export default BodyRow
