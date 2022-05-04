// import * as React from "react";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import './Tabs.css'
import Len_Kuz from "./data/Len_Kuz";
import Rej from "./data/Rej"
import Gay from"./data/Gay"
// import { createTheme } from '@mui/material/styles';
// import red from '@mui/material/colors/red';
// import {styled} from "@mui/material/styles";


import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


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

// const StyledTab = styled(Tab)(({ theme }) => ({
//     // '&:nth-of-type(odd)': {
//             borderRightColor: 'white',
//
//     }));

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             // borderColor: (theme: Theme) => theme.palette.primary.main
//             // borderColor={'white'}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ px: 3, bgcolor: '#f6eaea' }}>
//                     <Typography >{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
//
// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//         // 'borderRightColor':{'red'},
//         // 'span': borderColor: 'yellow',
//         }
//     };
//
//
// export default function VerticalTabs() {
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     return (
//         <Box
//              sx={{ flexGrow: 1, bgcolor: '#F6EAEA', display: 'flex', height: 335 }}
//         >
//             <Tabs
//                 orientation="vertical"
//                 variant="scrollable"
//                 // indicatorColor="secondary"
//
//                 textColor="primary"
//
//                 borderBottom="secondary"
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="Vertical tabs example"
//                 sx={{ borderRight: 1, borderColor: 'dimgrey'}}
//             >
//                 <Tab label="Ленинск-Кузнецкий" {...a11yProps(0)} />
//                 <Tab label="Новокузнецк" {...a11yProps(1)} />
//                 <Tab label="Норильск" {...a11yProps(2)} />
//                 <Tab label="Воркута" {...a11yProps(3)} />
//                 <Tab label="Москва" {...a11yProps(4)} />
//                 <Tab label="Гай" {...a11yProps(5)} />
//                 <Tab label="Шахты" {...a11yProps(6)} />
//             </Tabs>
//             <TabPanel value={value} index={0} >
//                <Len_Kuz />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//                 Item Four
//             </TabPanel>
//             <TabPanel value={value} index={4}>
//                 Item Five
//             </TabPanel>
//             <TabPanel value={value} index={5}>
//                 Item Six
//             </TabPanel>
//             <TabPanel value={value} index={6}>
//                 Item Seven
//             </TabPanel>
//         </Box>
//     );
// }



export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Ленинск-Кузнецкий" value="1" />
                        <Tab label="Новокузнецк" value="2" />
                        <Tab label="Норильск" value="3" />
                        <Tab label="Москва" value="4" />
                        <Tab label="Шахты" value="5" />
                        <Tab label="Воркута" value="6" />
                        <Tab label="Гай" value="7" />
                        <Tab label="Реж" value="8" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Len_Kuz /></TabPanel>
                <TabPanel value="2"><Len_Kuz /></TabPanel>
                <TabPanel value="3"><Rej /></TabPanel>
                <TabPanel value="4">Item Three</TabPanel>
                <TabPanel value="5">Item Three</TabPanel>
                <TabPanel value="6">Item Three</TabPanel>
                <TabPanel value="7"><Gay /></TabPanel>
                <TabPanel value="8"><Rej /></TabPanel>
            </TabContext>
        </Box>
    );
};