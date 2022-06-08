import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import LenKuz from "./data/Len_Kuz";
import Novokuznetsk from "./data/Novokuznetsk";
import Moscow from "./data/Moscow";
import Shahti from "./data/Shahti";
import Vorkuta from "./data/Vorkuta";
import Ural from "./data/Ural";
import Norilsk from "./data/Norilsk";
import Rekvizit from "./data/Rekvizit";

const blue = {
    50: '#f6eaea',
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
  // margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  // position: absolute;
  // z-index: 5;
  width: 100%;`;

export default function UnstyledTabsCustomized() {
    return (
        <>
         <TabsUnstyled defaultValue={0}>
            <React.Fragment>
            <TabsList sx={{width: 1240}}>
                <Tab>Ленинск-Кузнецкий</Tab>
                <Tab>Новокузнецк</Tab>
                <Tab>Москва</Tab>
                <Tab>Воркута</Tab>
                <Tab>Норильск</Tab>
                <Tab>Шахты</Tab>
                <Tab>Урал (УГМК)</Tab>
                <Tab>Реквизиты ООО "Сибтранссервис"</Tab>
            </TabsList>
            </React.Fragment>
            <TabPanel value={0}><LenKuz/></TabPanel>
            <TabPanel value={1}><Novokuznetsk /></TabPanel>
            <TabPanel value={2}><Moscow/></TabPanel>
            <TabPanel value={3}><Vorkuta/></TabPanel>
            <TabPanel value={4}><Norilsk/></TabPanel>
            <TabPanel value={5}><Shahti/></TabPanel>
            <TabPanel value={6}><Ural/></TabPanel>
            <TabPanel value={7}><Rekvizit/></TabPanel>
         </TabsUnstyled>
            <br/>
            </>
    );
}
