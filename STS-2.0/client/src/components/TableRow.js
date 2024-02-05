import React from "react";


const TableRow = () => {
        const headTable = ["index", "id", "Имя", "Email"];
        return (
             <div className="headTable">
                 {headTable.map((element, index) => {
                     return (
                        <table key={index}>
                            <tr>
                                <td key={index}>{element}</td>
                            </tr>
                        </table>
                     )
                    })
                 }
             </div>
        )
}

export default TableRow




