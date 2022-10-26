import React, {useState}from "react";
import { Link,useNavigate,Navigate } from "react-router-dom";
import {  FaSearch } from "react-icons/fa";
function Checkout(){
  const Navigate=useNavigate()
  const [button,setButton]=useState(false)
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [postalcode,setPostalcode]=useState("")
  function handleName(event){
    setButton(false)
    setName(event.target.value)
  }
  function handlePhone(event1){
    setButton(false)
    setPhone(event1.target.value)
    console.log(phone)
  }
  function handleAddress(event2){
    setButton(false)
    setAddress(event2.target.value)
    console.log(address)
  }
  function handlePostal(event3){
    setButton(false)
    setPostalcode(event3.target.value)
    console.log(postalcode)
  }
  function Confirmorder(){
    console.log("helooo")
    setButton(true)
    Navigate("/Confirm")
  }
    return(
      <div>
      <div className="navbar">
            <div className="searching">
            <div className="search1">  <FaSearch/></div>
            <input className="search" placeholder="Search"></input>
         </div>
               <div className="heading">Online Shopping</div>
            <div className="rightside">
           < Link  to="/Homepage" className="cart" >Home</Link>
                    <div>Profile</div>
                 <div> <div   className="cart" onClick={()=>{
                    // Cart(data)
                }}>  Cart </div></div>  
                   <Link  to="/Logout" className="cart" >Logout</Link>
                    </div></div>
        <div className="Checkoutpage">
          <div className="checkoutnames">
          <div className="name"> <input className="input" onChange={handleName} placeholder=" Name"></input></div>
          <div className="name"><input className="input"  onChange={handleAddress} placeholder="Phone number"></input></div> 
         <div className="name">  <input className="input"  onChange={handlePhone} placeholder=" Address"></input></div> 
          <div className="name"> <input className="input"  onChange={handlePostal} placeholder="Postal code"></input></div>
   <div>
   <select className="select" >
      <option value=""></option>
      <option value="Cash on Delevery">Cash on Delevery</option>
      <option value="Online Payment">Online Payment</option>
      </select></div>
      {(name!="" && phone!="" && address!="" && postalcode!="" )?((button==false)?
       <button onClick={Confirmorder} className="button">Confirmorder</button>:""):""}
     
      </div>
          </div>
          </div>

    )
}
export default Checkout;