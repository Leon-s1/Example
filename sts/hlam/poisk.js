// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import SearchBar from "material-ui-search-bar";
//
// const useStyles = makeStyles({
//     table: {
//         minWidth: 650
//     }
// });
//
// const poisk = () => {
//     const classes = useStyles();
//
// const [rows, setRows] = useState(rows);
// const [searched, setSearched] = useState("");
//
// const requestSearch = (searchedVal) => {
//     const filteredRows = originalRows.filter((row) => {
//         return row.name.toLowerCase().includes(searchedVal.toLowerCase());
//     });
//     setRows(filteredRows);
// };
//
// const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
// };
//
//
//     return (
//         <>
//             <Paper>
//                 <SearchBar
//                     value={searched}
//                     onChange={(searchVal) => requestSearch(searchVal)}
//                     onCancelSearch={() => cancelSearch()}
//                 />
//                 <TableContainer>
//                     <Table className={classes.table} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Food (100g serving)</TableCell>
//                                 <TableCell align="right">Calories</TableCell>
//                                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.map((row) => (
//                                 <TableRow key={row.name}>
//                                     <TableCell component="th" scope="row">
//                                         {row.name}
//                                     </TableCell>
//                                     <TableCell align="right">{row.calories}</TableCell>
//                                     <TableCell align="right">{row.fat}</TableCell>
//                                     <TableCell align="right">{row.carbs}</TableCell>
//                                     <TableCell align="right">{row.protein}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Paper>
//         </>
//     );
// };
//
// export default poisk;





// window.onload = () => {
//     let CssTextField = document.querySelector("#filled-search")
//     CssTextField.oninput = function () {
//         let value = this.value.trim();
//         let list= document.querySelectorAll("#row-fio")
//
//         console.log(this.value);
//
//     }
// }