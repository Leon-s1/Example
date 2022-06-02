import logo_sts from './logo/STS_logo.jpg';
import logo_ferrit from './logo/ferrit_logo.png'
import './App.css';
import Tabs from './Tabs'






function App() {
  return (
    <>
      <div className="App">
      <header className="App-header">
          <img src={logo_sts} className="App-logo" alt="logo" />
          <p>
              Телефонный справочник.
          </p>
          <img src={logo_ferrit} className="App-logo" alt="logo" />
      </header>

        <Tabs/>




        <footer className="App-footer">
          {/*<img src={logo_sts} className="App-logo" alt="logo" />*/}
          <div className="columnBottom inner" >
              <div className="row-fluid">

                  <div className="span">
                      <h4>ООО «СИБТРАНССЕРВИС»</h4>
                      <ul className="listcontact">
                          <li className="cont-phone">
                              Приемная: +7 (38456) 5-31-29, отдел кадров: 5-31-30, коммерческий отдел: 5-31-31</li>
                          <li className="cont-phone">Факс: +7 (38456) 5-31-28</li>
                          <li className="cont-email">
                              <a href="priemnay@sibtranss.ru">priemnay@sibtranss.ru</a>
                          </li>
                          <li className="cont-adress">Россия, г. Ленинск-Кузнецкий, ул. Зорина 8-б</li>
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
