import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function Addtocart(){
    const location=useLocation()
    const [data,setData]=useState()
    console.log(location)
    console.log(typeof(location))
    return(
<div>
    "heloooooo"
<h1>"Your cart is: "</h1>
<div>{location.state.image}</div>
<div>{location.state.icon}</div>
<div>{location.state.icon1}</div>
</div>
    );
}
export default Addtocart;