import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
// import '.././Tabs.css'


// const   tablecontainer = styled(Table) ({
//     backgroundColor: 'green',
//     // boxShadow: 'none',
//     padding: '15px',
//     // color: '#FFFFFF'
// });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        // padding: "10px",
    },
}));

function createData(fio, position, int_phone, mobile, email, skype) {
    return { fio, position, int_phone, mobile, email, skype};
}

const rows = [
    createData('Мельников Андрей Александрович', "Заместитель директора технического", "----", "8-905-915-2022", "melnikov_aa@sibtranss.ru\n" +
        "sibtransservis@yandex.ru\n", "melnikov120686"),
    createData('Павлова Виктория Владимировна', "Менеджер по ГШО", "----", "8-905-068-8369", "pavlova_vv@sibtranss.ru\n" +
        "sibtransservis@yandex.ru\n", "215f791c4580070a"),
    createData('Попов Константин Юрьевич', "Начальник участка № 7", "----", "8-903-946-7024", "popov_ky@sibtranss.ru\n" +
        "Pky70@rambler.ru\n", "----"),
];

export default function CustomizedTables() {
    return (
        <TableContainer >
            <Table sx={{minWidth: 1000 }} aria-label="customized table ">
                <TableHead>
                    <TableRow >
                        <StyledTableCell sx={{px: 1, width: 270}} align="center">ФИО</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 210}} align="center">Должность</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 10}} align="center">Вн. телефон</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 135}} align="center">Моб. телефон</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 180}} align="center">E-mail</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 210}} align="center">Skype</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell sx={{px: 1, width: 270}} component="th" scope="row" id="row-fio">
                                {row.fio}
                            </StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 210}} align="center">{row.position}</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 10}} align="center">{row.int_phone}</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 135}} align="center">{row.mobile}</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 180}} align="center">{row.email}</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 210}} align="center">{row.skype}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

