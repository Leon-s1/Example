import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState} from "react";
import SearchBar from "material-ui-search-bar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        fontSize: 18,
        borderRadius: 5,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(fio, position, int_phone, mobile, email, skype) {
    return { fio, position, int_phone, mobile, email, skype};
}

const originalRows = [
    createData('Колтунов Павел Владимирович', "Заместитель директора коммерческого", "119", "8-906-978-2822", "koltunov_pv@sibtranss.ru\n" +
        "koltunov.sts@mail.ru\n", "pavel11588"),
    createData('Аджиниязов Амир Балтенович',"Механик", '----', "8-902-948-3952\n" +
        "8-915-056-1177\n", "adjiniyazov_ab@sibtranss.ru", "----" ),
    createData('Скворцов Сергей Сергеевич', "Механик (в г. Норильске)", '----', "8-950-591-4471", "sscwortzov@gmail.com ", "----"),


];

export default function CustomizedTables() {
    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");

    const requestSearch = (searchedVal) => {
        const filteredRows = originalRows.filter((row) => {
            return row.fio.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };
    return (
        <>
            <SearchBar
                id="filled-search"
                placeholder="Введите фамилию сотрудника..."
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <br/>
            <TableContainer >
                <Table sx={{ minWidth: 1000 }} aria-label="customized table ">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell sx={{px: 1, width: 270}} align="center">ФИО</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 210}} align="center">Должность</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 10}} align="center">Внутр. телефон</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 120}} align="center">Моб. телефон</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 180}} align="center">E-mail</StyledTableCell>
                            <StyledTableCell sx={{px: 1, width: 210}} align="center">Skype</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell sx={{px: 1, width: 270}} component="th" scope="row">
                                    {row.fio}
                                </StyledTableCell>
                                <StyledTableCell sx={{px: 1, width: 210}} align="center">{row.position}</StyledTableCell>
                                <StyledTableCell sx={{px: 1, width: 10}} align="center">{row.int_phone}</StyledTableCell>
                                <StyledTableCell sx={{px: 1, width: 120}} align="center">{row.mobile}</StyledTableCell>
                                <StyledTableCell sx={{px: 1, width: 180}} align="center">{row.email}</StyledTableCell>
                                <StyledTableCell sx={{px: 1, width: 210}} align="center">{row.skype}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

