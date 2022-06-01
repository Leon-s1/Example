import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import {useState} from "react";
import SearchBar from "material-ui-search-bar";
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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        // padding: "10px",
    },
}));

function createData(fio, position, int_phone, mobile, email, skype) {
    return { fio, position, int_phone, mobile, email, skype};
}

const originalRows = [
    createData('Красников Игорь Владимирович',"Механик участка № 5", '----', "8-912-968-1446", "krasnikov_iv@sibtranss.ru\n" +
        "krasnikov_67@mail.ru\n", "----" ),
    // createData('Бельский Геннадий Николаевич', "Водитель", "----", "8-961-723-5825", "----", "----"),
    // createData('Богданов Александр Петрович', "Главный технолог", '109', "8-903-940-7371", "bogdanov.sts@mail.ru", "----"),
    // createData('Борисова Лариса Анатольевна ', "Бухгалтер", '120', "8-908-956-5390", "borisova_la@sibtranss.ru ", ".cid.eb433306c7273172"),
    // createData('Буртаев Павел Викторович', "Механик участка №3 ", '----', "8-951-178-95-56\n" +
    //     "8-905-917-72-29\n", "----", "----"),
    // createData('Васильева Ирина Григорьевна', "Менеджер по таможенному оформлению", '117', "8-951-589-0707", "vasileva_ig@sibtranss.ru\n" +
    //     "ira.v-sts@yandex.ru\n" , "irina.v79"),
    // createData('Винокуров Анатолий Валерьевич', "Менеджер по таможенному оформлению", '117', "8-950-571-5668", "vinokurov_av@sibtranss.ru\n" +
    //     "vinokur82@yandex.ru\n", "anatol504"),
    //
    // createData('Гарбуз Тамара Петровна', "Главный бухгалтер", "107", "8-951-170-8753", "garbuz_tp@sibtranss.ru\n" +
    //     "sts.garbuz@mail.ru\n", "garbuz.sts"),
    // createData('Дубровская Галина Семеновна', "Бухгалтер расчетчик", "120", "8-923-531-7464", "dubrovskay_gs@sibtranss.ru\n" +
    //     "sts.dubrovskay@mail.ru\n", "sts.dubrovskay"),
    // createData('Иванова Валентина Васильевна', "Начальник ОТК", "114", "8-923-482-5438", "ivanova_vv@sibtranss.ru\n" +
    //     "Ivanova.sts@inbox.ru\n", "ivanova.sts"),
    // createData('Иванова Наталья Алексеевна ', "Инженер по охране труда", "124", "8-913-285-5448", "ivanova_na@sibtranss.ru\n" +
    //     "kni0212@mail.ru\n", ".cid.e736c9d983a8de56"),
    // createData('Каргина Наталья Иосифовна', "Менеджер по рекламе", "119", "8-904-578-4270", "kargina_ni@sibtranss.ru\n" +
    //     "kargina.sts@mail.ru\n", "kargina.sts"),
    // createData('Киселев Геннадий Владимирович', "Ведущий менеджер по ГШО", "119", "8-906-938-5900", "kiselev_gv@sibtranss.ru\n" +
    //     "kiceleb.sts@mail.ru\n", "kiceleb"),
    // createData('Колтунов Павел Владимирович', "Заместитель директора коммерческого по снабжению ", "119", "8-906-978-2822", "koltunov_pv@sibtranss.ru\n" +
    //     "koltunov.sts@mail.ru\n", "pavel11588"),
    // createData('Комаров Эдуард Викторович', "Начальник гаража", "123", "8-951-173-6176", "komarov@sibtranss.ru\n" +
    //     "e.komarov.00@bk.ru\n", ".cid.8865c929bfb1e2b2"),
    // createData('Пилюгин Михаил Владимирович', "Генеральный директор", "110", "8-923-636-7055", "pilyugin_mv@sibtranss.ru", "pilugin_m"),
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
                // sx={{Width: 700}}
                id="filled-search"
                placeholder="Введите фамилию сотрудника..."
                // label="Введите фамилию сотрудника..."
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
                        <StyledTableCell sx={{px: 1, width: 10}} align="center">Вн. телефон</StyledTableCell>
                        <StyledTableCell sx={{px: 1, width: 130}} align="center">Моб. телефон</StyledTableCell>
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
                            <StyledTableCell sx={{px: 1, width: 130}} align="center">{row.mobile}</StyledTableCell>
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

