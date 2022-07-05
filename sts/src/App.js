import logo_sts from './logo/STS_logo.jpg';
import logo_ferrit from './logo/ferrit_logo.png'
import './App.css';
import Tabs from './Tabs'
import * as React from "react";
import { Link } from "react-router-dom"
// import ReactRouter from "react-router"

function App() {
  return (
    <>
      <div className="App">
      <header className="App-header">
          <a className={"underline-one"} href={"http://sibtranss.ru"} target="_blank">
              <img src={logo_sts} className="App-logo" alt="logo" />
          </a>
          <p>Телефонный справочник.</p>
          <a className={"underline-one"} href={"https://www.ferrit.cz/ru"} target="_blank">
              <img src={logo_ferrit} className="App-logo" alt="logo" />
          </a>
      </header>
        <Tabs/>
        <footer className="App-footer">
           <div className="columnBottom inner" >
              <div className="row-fluid">
                  <div className="span">
                      <ul className="listcontact">
                          <h4>ООО «СИБТРАНССЕРВИС» Ленинск-Кузнецкий</h4>
                          <li className="cont-phone">
                              Приемная: +7 (38456) 5-31-29, отдел кадров: 5-31-30, коммерческий отдел: 5-31-31</li>
                          <li className="cont-phone">Факс: +7 (38456) 5-31-28</li>
                          <li className="cont-email">
                              <a href="mailto:priemnay@sibtranss.ru">priemnay@sibtranss.ru</a>
                          </li>
                          <li className="cont-adress">Россия, г. Ленинск-Кузнецкий, ул. Зорина 8-б</li>
                      </ul>
                      <ul className="listcontact">
                          <h4>ООО «СИБТРАНССЕРВИС» Новокузнецк</h4>
                          <li className="cont-phone">
                              Приемная: 8(3843)37-36-65</li>
                          <li className="cont-email">
                              <a href="mailto:priemnay@sibtranss.ru">sibtransservis@yandex.ru</a>
                          </li>
                          <li className="cont-adress">Россия, Г. Новокузнецк, проезд Ферросплавный 15</li>
                          <h3><a href = "http://sibtranss.ru">Сайт СИБ<span>ТРАНС</span>СЕРВИС</a></h3>
                      </ul>
                  </div>
              </div>
          </div>
        </footer>
      </div>
</>

  );
}

export default App;
