import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import "../src/style/style.css";
import { BrowserRouter } from "react-router-dom";
import AdminButtons from "./components/AdminButtons";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const App = observer(() => {
  const [users, setUsers] = useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      getUsers();
      setLoading(false);
    }, 0);
  }, []);

  function getUsers() {
    // fetch('http://192.168.1.247:3001')
    fetch("http://localhost:3001")
      // fetch("http://localhost:5440")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setUsers(data);
      });
  }

  const user = localStorage.getItem("user.isAdmin");

  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <div className="list">
          {loading}
          <>
            <div className="row__card">
              <ItemList />
            </div>
            {user ? <AdminButtons /> : <></>}
            <AppRouter />
          </>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
});
export default App;
