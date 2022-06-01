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


    </div>

        <footer className="App-footer">
          <img src={logo_sts} className="App-logo" alt="logo" />
          <div className="columnBottom inner" >

          </div>
        </footer>
</>

  );
}

export default App;
