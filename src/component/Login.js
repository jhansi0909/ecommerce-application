import React, { useState } from "react";
import { Navigate,useNavigate,Link } from "react-router-dom";
function Login(){
const Navigate=useNavigate()
    const [phone,setPhone]=useState("")
    const [otp,setOtp]=useState("")
    const [button,setButton]=useState(false)
    function handlePhone(event){
      setButton(false)
      setPhone(event.target.value)
      // console.log(phone)
    }
    function handleOtp(event1){
      setButton(false)
      setOtp(event1.target.value)
    }
    function Call(){
        setButton(true)
        console.log(phone)
        console.log(otp)
        Navigate("/Homepage")
    }

      return(
      <div>
        <div className="input1">
       <div className="phone">{"Enter your Phone number"}</div>
       <div><input className="password"  placeholder="Phone number" onChange={handlePhone}></input></div>
      <div className="data"> {(phone=="")?((button==true)?"Please fill the requied field":" "):""}</div>
       <div  className="otp">{"Enter OTP"}</div>
       <div><input className="password" placeholder="OTP" onChange={handleOtp} ></input></div>
       <div className="data"> {(otp=="")?((button==true)?"Please fill the requied field":" "):""}</div>
      {(phone!="" && otp!="")?((button==false)?
       <button onClick={Call} className="login">Login</button>:""):""}
     </div>
     </div>

      )
}
export default Login;