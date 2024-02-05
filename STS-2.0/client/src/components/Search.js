import React, {useEffect, useState} from 'react';
import Table from "./Table";
import LenKuz from "../page/LenKuz";
import Loader from "../Loader";



// eslint-disable-next-line react/prop-types
const Search = ( {obj} ) => {
    const values = Object.values(obj)
    // const [users, setUsers] = useState(false);
    // const obj = JSON.parse(users);
    // const values = Array.of(...(Object.values(obj)))
    // const [rows, setRows] = useState([values])
    const [searched, setSearched] = useState("")

    const [rows, setRows] = useState(values)
    const [loading, setLoading] = React.useState(true)

    console.log('rows в search= ', rows)
    console.log('searched = ', searched)
    console.log('Object.values(obj) из search = ', typeof (Object.values(values)), obj);
    console.log('values из Search = ', typeof (values), values);
    // console.log('obj JSON.parse(users) = ', obj)
    console.log('obj из search= ', typeof (obj), obj)
    // console.log('users из search= ', typeof (users), users)



    useEffect(() => {
        setTimeout(() => {
            // getUsersCity()
            // const requestedSearch = requestSearch(searched);

            // setRows(values)
            setLoading(false)
        }, 1000);
    }, []);




    // const requestSearch = (searchedVal) => {
    //     const fios = searchedVal
    //     console.log('searchedVal в requestSearch = ', searchedVal)
    //     console.log('Object.values(obj) = ', Object.values(obj))
    //     if (!searchedVal) {
    //         return <Table obj={rows} />
    //     }
    //
    //     const filteredRows =  rows.filter(( row ) => {
    //         return row.fio.toLowerCase().includes(fios)
    //     })
    //     setRows(filteredRows)
    //     console.log('rows в requestSearch = ', rows)
    // }

    // const requestSearch = (searched, rows) => {
        //     console.log('searchedVal в requestSearch = ', searchedVal);
        //     if (!searchedVal) {
        //         return <Table obj={searchedVal} />
        //     }
        //         console.log('searchedVal === values.fio', searchedVal, values.fio)

        const filteredRows = rows.filter(row => {
        // const filteredRows = Object.values(obj).map(row => {
            return row.fio.toLowerCase().includes(searched.toLowerCase())
                // console.log('row.fio = ', row.fio)

        })
    // }
    console.log('filteredRows = ', filteredRows)

        // setRows(filteredRows)
    // requestSearch(searched)
    return (
        <div>
            <div className='search'>
                <input className='search-input'
                    type="text"
                    placeholder="Введите фамилию сотрудника..."
                    // name="fio"
                    value={searched}
                    // onChange={(event) => console.log(event.target.value)}
                    // onChange={(searchVal) => requestSearch(setSearched(searchVal.target.value))}
                    // onChange={(searchVal) => requestSearch(searchVal)}
                    onChange={(searchVal) => setSearched(searchVal.target.value)}
                    // onChange={(searchVal) => filteredRows(searchVal)}
                />
            </div>

            {/*{loading && <Loader />}*/}


                        {
                            filteredRows.map((row, id) => {
                                return (
                                    <Table obj={rows} key={id} />
                                )
                            })
                        }




            {/*// /!*{ rows  ? (*!/*/}
            {/*// /!*    <>*!/*/}
            {/*// /!*        {*!/*/}
            {/*// /!*            filteredRows.map((row, id) => {*!/*/}
            {/*// /!*                return (*!/*/}
            {/*// /!*                    <Table obj={rows} key={id} />*!/*/}
            {/*// /!*                )*!/*/}
            {/*// /!*            })*!/*/}
            {/*// /!*        }*!/*/}
            {/*// /!*    </>*!/*/}
            {/*// /!*) : loading ? null : (*!/*/}
            {/*// /!*    'There is no merchant data available'*!/*/}
            {/*// }*/}

        </div>
    );
};

export default Search;
