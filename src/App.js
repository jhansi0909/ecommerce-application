import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Online from './component/Online';
import Login from './component/Login';
import Cards from './component/Cards';
import Homepage from './component/Homepage';
import Addtocart from './component/Addtocart';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Confirm from './component/Confirm';
import Logout from './component/Logout';
function App() {
  return (
    <div>
   <Routes>
   <Route path="/" element={<Login></Login>}></Route>
   <Route path="/Login" element={<Login></Login>}></Route>
   <Route path="/Homepage" element={<Homepage></Homepage>}></Route>
   <Route path="/Addtocart" element={<Addtocart></Addtocart>}></Route>
   <Route path="/Cart" element={<Cart></Cart>}></Route>
   <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
   <Route path="/Confirm" element={<Confirm></Confirm>}></Route>
   <Route path="/Logout" element={<Logout></Logout>}></Route>
   </Routes>
   {/* <Online></Online>
   <Login></Login> */}
   </div>
  );
}

export default App;
