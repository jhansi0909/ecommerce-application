import React from "react";
import {  FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Confirm(){
    return(
        <div>
        <div className="navbar">
        <div className="searching">
        <div className="search1">  <FaSearch/></div>
        <input className="search" placeholder="Search"></input>
     </div>
           <div className="heading">Online Shopping</div>
        <div className="rightside">
              <Link  to="/Homepage" className="cart" >Home</Link>
                <div>Profile</div>
             <div> <div   className="cart" onClick={()=>{
                // Cart(data)
            }}>  Cart </div></div>  
               <Link  to="/Login" className="cart" >Logout</Link>
                </div></div>
        <h2 className="confirm">
            Your order is placed successfully
        </h2>
        </div>
    )
}
export default Confirm;