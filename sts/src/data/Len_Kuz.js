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


const   tablecontainer = styled(Table) ({
        backgroundColor: 'green',
        // boxShadow: 'none',
        padding: '15px',
        // color: '#FFFFFF'
    });

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
    },
}));

function createData(fio, position, int_phone, mobile, email, skype) {
    return { fio, position, int_phone, mobile, email, skype};
}

const rows = [
    createData('Ампилогов Михаил Александрович',"Механик участка №4", '----', "8-909-707-5637", "" ),
    createData('Пилюгин Михаил Владимирович', "Генеральный директор", "110", "8-923-636-7055", "pilyugin_mv@sibtranss.ru", "pilugin_m"),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 980 }} aria-label="customized table ">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ФИО</StyledTableCell>
                        <StyledTableCell align="center">Должность</StyledTableCell>
                        <StyledTableCell align="center">Вн. телефон</StyledTableCell>
                        <StyledTableCell align="center">Моб. телефон</StyledTableCell>
                        <StyledTableCell align="center">E-mail</StyledTableCell>
                        <StyledTableCell align="center">Skype</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.fio}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.position}</StyledTableCell>
                            <StyledTableCell align="center">{row.int_phone}</StyledTableCell>
                            <StyledTableCell align="center">{row.mobile}</StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell align="center">{row.skype}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

