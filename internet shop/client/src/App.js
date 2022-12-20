// import 'bootstrap/dist/css/bootstrap.min.css'
//
// function App() {
//   return (
//     <div>
//       SHOP
//     </div>
//   );
// }
//
// export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Shop from './pages/Shop.js'
// import Product from './pages/Product.js'
// import Basket from './pages/Basket.js'
// import Login from './pages/Login.js'
// import Signup from './pages/Signup.js'
// import Delivery from './pages/Delivery.js'
// import Contacts from './pages/Contacts.js'
// import NotFound from './pages/NotFound.js'
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            {/*<Routes>*/}
            {/*    <Route path='/' element={<Shop/>}/>*/}
            {/*    <Route path='/product/:id' element={<Product />} />*/}
            {/*    <Route path='/basket' element={<Basket />} />*/}
            {/*    <Route path='/login' element={<Login />} />*/}
            {/*    <Route path="/signup" element={<Signup />} />*/}
            {/*    <Route path="/delivery" element={<Delivery />} />*/}
            {/*    <Route path="/contacts" element={<Contacts />} />*/}
            {/*    /!*<Route path="*" element={<NotFound />} />*!/*/}
            {/*</Routes>*/}
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App