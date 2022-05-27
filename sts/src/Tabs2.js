import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField'
import './Tabs.css'
import Len_Kuz from "./data/Len_Kuz";
import Novokuznetsk from "./data/Novokuznetsk";
import Rej from "./data/Rej"
import Gay from "./data/Gay"
import Vorkuta from "./data/Vorkuta"
import Shahti from "./data/Shahti"
import Moscow from "./data/Moscow"
import Shadrinsk from "./data/Shadrinsk";
import Demo from './data/Rekvizit'
import {createTheme} from "@material-ui/core/styles";
// import Poisk from "./poisk"
// import SearchBar from "material-ui-search-bar";
import {useState} from "react";
// import { createTheme } from '@mui/material/styles';
// import red from '@mui/material/colors/red';
// import {styled} from "@mui/material/styles";


;


// const theme = createTheme({
//     palette: {
//         secondary: red,
//     },
// });

// const theme = createTheme({
//     components: {
//         // Name of the component
//         MuiTabs: {
//             styleOverrides: {
//                 // Name of the slot
//                 root: {
//                     // Some CSS
//                     borderRightColor: 'red',
//                     fontSize: '1rem',
//                 },
//             },
//         },
//     },
// });

const CssTextField = styled(TextField)({
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

const CssTab = styled(Tab)({

    '& button.MuiTab-textColorPrimary': {
        color: 'red',
    },
    'MuiButtonBase-root': {
        padding: '12 16',
    },
    'ButtonBase': {
        padding: '12 16',
    }
    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'green',
    // },
    // '& .MuiButtonBase-root': {
    //     '& fieldset': {
    //         borderColor: 'red',
    //     },
        // '&:hover fieldset': {
        //     borderColor: 'yellow',
        // },
    //     '&.Mui-focused fieldset': {
    //         borderColor: 'red',
    //     },
    // },
});

const theme = createTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButtonBase: {
            // Name of the rule
            text: {
                // Some CSS
                color: 'white',
            },
        },
    },
});

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', borderRadius: 5 }}>
        {/*<Box sx={{ width: '100%', typography: 'body1', borderRadius: 5 }}>*/}

            {/*component="form"*/}
        {/*    sx={{*/}
        {/*    '& .MuiTextField-root': { m: 1, width: '25ch' },*/}
        {/*}}*/}
        {/*    noValidate*/}
        {/*    autoComplete="off"*/}

            <CssTextField
                sx={{minWidth: 1224, pb:  '10px' }}
                // value={name}
                id="filled-search"
                label="Введите фамилию сотрудника..."
                type="search"
                variant="filled"
                color="warning"
                aria-label="customized table"
            />
            {/*<SearchBar*/}
            {/*    value={searched}*/}
            {/*    onChange={(searchVal) => requestSearch(searchVal)}*/}
            {/*    onCancelSearch={() => cancelSearch()}*/}
            {/*/>*/}


            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="customized table">
                        <CssTab sx={{px: 2}} label="Ленинск-Кузнецкий" value="1" />
                        <CssTab sx={{px: 2}} label="Новокузнецк" value="2" />
                        <Tab label="Норильск" value="3" />
                        <Tab label="Москва" value="4" />
                        <Tab label="Шахты" value="5" />
                        <Tab label="Воркута" value="6" />
                        <Tab label="Гай" value="7" />
                        <Tab label="Реж" value="8" />
                        <Tab label="Шадринск" value="9" />
                        <Tab label="Демо" value="10" />
                    </TabList>
                </Box>
                <TabPanel sx={{px: 1}} value="1"><Len_Kuz /></TabPanel>
                <TabPanel sx={{px: 1}} value="2"><Novokuznetsk /></TabPanel>
                <TabPanel sx={{px: 1}} value="3"><Rej /></TabPanel>
                <TabPanel sx={{px: 1}} value="4"><Moscow/></TabPanel>
                <TabPanel sx={{px: 1}} value="5"><Shahti/></TabPanel>
                <TabPanel sx={{px: 1}} value="6"><Vorkuta/></TabPanel>
                <TabPanel sx={{px: 1}} value="7"><Gay /></TabPanel>
                <TabPanel sx={{px: 1}} value="8"><Rej /></TabPanel>
                <TabPanel sx={{px: 1}} value="9"><Shadrinsk /></TabPanel>
                <TabPanel sx={{px: 1}} value="10"><Demo/></TabPanel>
            </TabContext>
        </Box>
    );
};