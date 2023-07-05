import React from "react";

const BodyRow = ({obj}) => {
    const headTable = ["index", "id", "Имя", "Email"];
    return (
    <>
        <div>

            <div className="headTable">
                {headTable.map((element, index) => {
                    return (
                        <table>
                            <tr>
                                <td key={index}>{element}</td>
                            </tr>
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
                                <tr>
                                    <td key={index}>{index}</td>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                </tr>
                            </table>
                );
            })}
        </div>
        </>

    )
}

export default BodyRow
