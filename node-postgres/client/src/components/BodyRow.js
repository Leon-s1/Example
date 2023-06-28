// import React from "react";

import React from "react";

const BodyRow = ({obj}) => {
    return (
        <div>
        {Object.values(obj).map((value, index) => {
                return (
                            <table>
                                <tr>
                                    <td>{index}</td>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                </tr>
                            </table>
                );
            })}
        </div>

    )
}

export default BodyRow
