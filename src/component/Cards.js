import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Cards()
{
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const [button,setButton]=useState(false)
const [data,setData]=useState([])
const navigate=useNavigate();
function handleChange(name)
{
    setName(name.target.value)
    setButton(false)
}
function handleEmail(email)
{
    setEmail(email.target.value)
    setButton(false)
}
function handleMessage(message)
{
    setMessage(message.target.value)
    setButton(false)
}
function Call()
{
    setButton(true)
    if(name!="" && email!="" && message!="")
    {
        setData([...data,
            {
                name:name,
                email:email,
                message:message
            }])
        console.log("data is",data)
    }
    // navigate("/Card",{state:data})
}
function Calling()
{
   navigate("/Online",{state:data})
}
 return(
        <div>
        <div >
        <div>
        <div >
       <div >
        <div  >
       <div > <input  placeholder="Name" onChange={handleChange}></input>
        <div > {(name=="")?((button==true)?"Please fill the requied field":" "):""}</div>
        </div>
        <div><input  placeholder="Email" onChange={handleEmail}></input>
       <div > {(email=="")?((button==true)?"Please fill the requied field":" "):""}</div>
       </div>
       </div></div>
       <div><input placeholder="Message" onChange={handleMessage}></input>
       <div > {(message=="")?((button==true)?"Please fill the requied field":" "):""}</div>
       </div>
       <div >
       <button  onClick={Call}>SEND</button>
       <button  onClick={Calling}>Add</button>
       </div>
       </div>
</div>
</div>
 </div>
    )
}
export default Cards;