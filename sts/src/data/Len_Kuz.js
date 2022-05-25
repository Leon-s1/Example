import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@mui/material/Table';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
// import TableBody from '@mui/material/TableBody';
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import { tableCellClasses } from '@mui/material/TableCell';

// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from "@material-ui/core/Paper";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


// import Table from "@material-ui/core/Table";

// const useStyles = makeStyles({
//     table: {
//         minWidth: 1000
//     }
// });

// import Paper from '@mui/material/Paper';
// import {useState} from "react";
// import poisk from "../poisk";
// import '.././Tabs.css'


// const   tablecontainer = styled(Table) ({
//         backgroundColor: 'green',
//         // boxShadow: 'none',
//         padding: '15px',
//         // color: '#FFFFFF'
//     });
// const Len_Kuz = () => {
//     const classes = useStyles();

    const CssSearchBar = styled(SearchBar)({
        '& label.Mui-focused': {
            color: 'red',
        },
        // '& .MuiInput-underline:after': {
        //     borderBottomColor: 'green',
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            // '&:hover fieldset': {
            //     borderColor: 'yellow',
            // },
            '&.Mui-focused fieldset': {
                borderColor: 'red',
            },
        },
    });

const StyledSearchBar = styled(SearchBar)(({ theme }) => ({
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

// function createData(fio, position, int_phone, mobile, email, skype) {
//      return { fio, position, int_phone, mobile, email, skype};





const originalRows = [
    {fio:'Ампилогов Михаил Александрович',position:"Механик участка № 4", int_phone:'----', mobile:"8-909-707-5637", email:"ampilogov.1979@mail.ru", skype:"----" },
    {fio:'Петров Михаил Александрович',position:"Механик участка № 4", int_phone:'----', mobile:"8-909-707-5637", email:"ampilogov.1979@mail.ru", skype:"----" }
    // createData('Бельский Геннадий Николаевич', "Водитель", "----", "8-961-723-5825", "----", "----"),
    // createData('Богданов Александр Петрович', "Главный технолог", '109', "8-903-940-7371", "bogdanov.sts@mail.ru", "----"),
    // createData('Борисова Лариса Анатольевна ', "Бухгалтер", '120', "8-908-956-5390", "borisova_la@sibtranss.ru ", ".cid.eb433306c7273172"),
    // createData('Буртаев Павел Викторович', "Механик участка № 3 ", '----', "8-951-178-9556\n" +
    //     "8-905-917-7229\n", "----", "----"),
    // createData('Васильева Ирина Григорьевна', "Менеджер по таможенному оформлению", '117', "8-951-589-0707", "vasileva_ig@sibtranss.ru\n" +
    //     "ira.v-sts@yandex.ru\n" , "irina.v79"),
    // createData('Винокуров Анатолий Валерьевич', "Менеджер по таможенному оформлению", '117', "8-950-571-5668", "vinokurov_av@sibtranss.ru\n" +
    //     "vinokur82@yandex.ru\n", "anatol504"),
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
    // createData('Колтунов Павел Владимирович', "Заместитель директора коммерческого по снабжению", "119", "8-906-978-2822", "koltunov_pv@sibtranss.ru\n" +
    //     "koltunov.sts@mail.ru\n", "pavel11588"),
    // createData('Комаров Эдуард Викторович', "Начальник гаража", "123", "8-951-173-6176", "komarov@sibtranss.ru\n" +
    //     "e.komarov.00@bk.ru\n", ".cid.8865c929bfb1e2b2"),
    // createData('Кузьминых Анна Александровна', "Экономист (по МТС и сбыту)", "123", "8-906-976-4680", "kuzminikh_aa@sibtranss.ru\n" +
    //     "kuzminikh88@mail.ru\n", "kuzminikh_sts"),
    // createData('Кычанова Наталья Константиновна', "Бухгалтер", "120", "8-961-725-4495", "kychanova_nk@sibtranss.ru", ".cid.6fbb76346d118e65"),
    // createData('Лобачев Евгений Анатольевич', "Технический директор", "106", "8-923-512-3617 8-960-908-6043", "lobachev_ea@sibtranss.ru\n" +
    //     "lobachev.sts@mail.ru\n", "lobachev.sts"),
    // createData('Лязгина Ольга Николаевна', "Заместитель генерального директора по качеству", "124", "8-923-616-4485", "lyazgina_on@sibtranss.ru\n" +
    //     "smk.sts@mail.ru\n", "lyazgina.sts"),
    // createData('Малёв Дмитрий Васильевич', "Начальник горно-монтажного участка № 1", "124", "8-951-597-4278", "----", "----"),
    // createData('Митрошина Оксана Анатольевна', "Кладовщик", "113", "8-951-577-2669", "mitroshina_oa@sibtranss.ru", ".cid.f72cd629665df550"),
    // createData('Михеев Евгений Николаевич', "Главный механик", "115", "8-960-900-4079", "miheev_en@sibtranss.ru\n" +
    //     "e.miheev81@mail.ru\n", "----"),
    // createData('Москвин Эдуард Николаевич', "Зам.технического директора по охране труда и производственному контролю", "124", "8-903-942-5996", "moskvin@sibtranss.ru", "----"),
    // createData('Мясников Григорий Олегович', "Начальник участка № 1", "123", "8-905-907-1055", "myasnikov_go@sibtranss.ru\n" +
    //     "myasnikov.sts@mail.ru\n", "myasnikov.sts"),
    // createData('Нестеренко Павел Юрьевич', "Начальник складского хозяйства", "119", "8-961-706-9943", "nesterenko_p@sibtranss.ru\n" +
    //     "nesterenko.p@mail.ru\n", "----"),
    // createData('Ожогина Светлана Борисовна', "Инспектор по кадрам", "112", "8-906-924-9737", "ozhogina_sb@sibtranss.ru\n" +
    //     "ozhogina.sts@mail.ru\n", "----"),
    // createData('Оскотский Виталий Григорьевич', "Заместитель начальника гаража", "----", "8-913-287-2371", "ozhogina_sb@sibtranss.ru\n" +
    //     "ozhogina.sts@mail.ru\n", "----"),
    // createData('Петрищев Максим Николаевич', "Директор коммерческий", "118", "8-905-919-9463", "petrishev_mn@sibtranss.ru\n" +
    //     "petrishev_sts@mail.ru\n", "a187357"),
    // createData('Пилюгин Михаил Владимирович', "Генеральный директор", "110", "8-923-636-7055", "pilyugin_mv@sibtranss.ru\n" +
    //     "m.pilyugin69@yandex.ru\n", "pilugin_m"),
    // createData('Погарцева Светлана Сергеевна', "Кладовщик", "113", "8-900-106-4804", "pogarceva_ss@sibtranss.ru", ".cid.8291dc4f7b23420f"),
    // createData('Пономарева Галина Владимировна', "Бухгалтер", "120", "8-950-590-3363", "ponomareva_gv@sibtranss.ru\n" +
    //     "ponomareva.sts@mail.ru\n", ".cid.8291dc4f7b23420f"),
    // createData('Рязанова Ольга Михайловна', "Инспектор по кадрам", "112", "8-951-165-3421", "ryazanova_om@sibtranss.ru\n" +
    //     "olgryazanova@mail.ru\n", "olga.ryazanova"),
    // createData('Сачук Татьяна Алексеевна', "Бухгалтер (Локотранс)", "120", "8-904-376-4142", "sachuk_ta@sibtranss.ru\n" +
    //     "sachuk.sts1@mail.ru\n", ".cid.26f11308e0cbcef"),
    // createData('Тараненко Сергей Алексеевич', "Заместитель генерального директора по экономической безопасности", "105", "8-960-787-0004\n" +
    //     "8-906-988-0207\n", "taranenko_sa@sibtranss.ru", ".cid.89dbcda200ecfe36"),
    // createData('Токарь Татьяна Ивановна', "Кладовщик", "113", "8-951-577-4450", "tokar_ti@sibtranss.ru", "tatiana.sts3"),
    // createData('Трухманов Сергей Васильевич', "Заместитель директора коммерческого", "119", "8-906-977-4770", "trukhmanov_sv@sibtranss.ru\n" +
    //     "truhmanov.sts@mail.ru\n", "truhmanovserg2472"),
    // createData('Чупров Сергей Александрович', "Системный администратор", "109", "8-905-079-9181\n" + "8-923-608-2256\n", "chuprov_sa@sibtranss.ru", ".cid.5ca4b17fe0de3d6b"),
    // createData('Шанкин Александр Сергеевич', "Начальник производства", "114", "8-913-123-5776", "shankin_as@sibtranss.ru\n" +
    //     "a.shankin@mail.ru\n", "shankin.sts"),
    // createData('Шарифуллин Салават Сафуанович', "Заместитель начальника участка № 1", "123", "8-952-165-2915", "sharifullin_ss@sibtranss.ru", "----"),
    // createData('Шевцов Евгений Юрьевич', "Инженер-конструктор", "109", "8-923-506-3864", "shevcov_e@sibtranss.ru\n" +
    //     "shvetsov-70512.lnk@rambler.ru\n", "evgenyshevcov"),
    // createData('Шестаков Андрей Владимирович', "Юрист", "----", "8-905-070-7763", "shestakof-andrey@mail.ru", "----"),
    // createData('Ядыкина Ольга Викторовна', "Референт-секретарь", "101", "8-913-331-2507", "yadykina_ov@sibtranss.ru", "yadikina2"),
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
             <Box sx={{ width: '100%', typography: 'body1', borderRadius: 5 }}>
                  {/*<Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>*/}
                 <SearchBar
                     // sx={{Width: 700}}
                     id="filled-search"
                     // label="Введите фамилию сотрудника..."
                     value={searched}
                     onChange={(searchVal) => requestSearch(searchVal)}
                     onCancelSearch={() => cancelSearch()}
                 />
                <br/>
             <TableContainer>



                 {/*<br/>*/}
                 <Table sx={{minWidth: 1000}} aria-label="customized table ">
                     <TableHead>
                         <TableRow>
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
                                 <StyledTableCell sx={{px: 1, width: 270}} component="th" scope="row" id="row-fio">
                                     {row.fio}
                                 </StyledTableCell>
                                 <StyledTableCell sx={{px: 1, width: 210}}
                                                  align="center">{row.position}</StyledTableCell>
                                 <StyledTableCell sx={{px: 1, width: 10}}
                                                  align="center">{row.int_phone}</StyledTableCell>
                                 <StyledTableCell sx={{px: 1, width: 130}}
                                                  align="center">{row.mobile}</StyledTableCell>
                                 <StyledTableCell sx={{px: 1, width: 180}}
                                                  align="center">{row.email}</StyledTableCell>
                                 <StyledTableCell sx={{px: 1, width: 210}}
                                                  align="center">{row.skype}</StyledTableCell>
                             </StyledTableRow>
                         ))}
                     </TableBody>
                 </Table>
             </TableContainer>
         </Box>
         );

 }
// export default Len_Kuz;

