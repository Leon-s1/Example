import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import LenKuz from "./data/Len_Kuz";
import Novokuznetsk from "./data/Novokuznetsk";
import Rekvizit from "./data/Rekvizit";
import TextField from "@mui/material/TextField";

const blue = {
    // 50: '#F0F7FF D1F6EAEA',
    50: '#F6EAEA',
    100: '#C2E0FF',
    200: '#232424',
    300: '#66B2FF',
    400: '#fd0202',
    500: '#ffffff',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[400]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[50]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

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



export default function UnstyledTabsCustomized() {
    return (
        <>
        {/*<CssTextField*/}
        {/*    sx={{minWidth: 1224, pb:  '10px' }}*/}
        {/*    // value={name}*/}
        {/*    id="filled-search"*/}
        {/*    label="Введите фамилию сотрудника..."*/}
        {/*    type="search"*/}
        {/*    variant="filled"*/}
        {/*    color="warning"*/}
        {/*    aria-label="customized table"*/}
        {/*/>*/}

        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>Ленинск-Кузнецкий</Tab>
                <Tab>Новокузнецк</Tab>
                <Tab>Норильск</Tab>
                <Tab>Москва</Tab>
                <Tab>Шахты</Tab>
                <Tab>Воркута</Tab>
                <Tab>Гай</Tab>
                <Tab>Реж</Tab>
                <Tab>Шадринск</Tab>
                <Tab>Реквизиты ООО "Сибтранссервис"</Tab>
            </TabsList>
            <TabPanel value={0}><LenKuz/></TabPanel>
            <TabPanel value={1}><Novokuznetsk /></TabPanel>
            <TabPanel value={2}>Third page</TabPanel>
            <TabPanel value={3}>Third page</TabPanel>
            <TabPanel value={4}>Third page</TabPanel>
            <TabPanel value={5}>Third page</TabPanel>
            <TabPanel value={6}>Third page</TabPanel>
            <TabPanel value={7}>Third page</TabPanel>
            <TabPanel value={8}>Third page</TabPanel>
            <TabPanel value={9}><Rekvizit /></TabPanel>
        </TabsUnstyled>
            </>
    );
}
