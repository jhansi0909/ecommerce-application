import React ,{useState}from "react";
import { Link,useNavigate, Navigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Cart(){
  var x
    const location=useLocation()
    const Navigate=useNavigate()
    const [add,setAdd]=useState(0)
    const [remove,setRemove]=useState()
    var totalprice=0
    var cart
    const [data,setData]=useState(location.state)
     const [id,setId]=useState(data.id)  
    const [quantity,setQuantity]=useState(1)
    const [productExist,setProductExist]=useState(0)
      function Remove(obj){
        const x = data.filter((data) => data.id != obj.id);
        setData(x)
        console.log(location.state)
     }
     function Checkout(){
        Navigate("/Checkout")
}
const handleAddProduct=(obj)=>{
 x=data.map((y)=>{
  if(y.id==obj.id){
    console.log(y.cart)
    return {...y,cart:y.cart+1}
  }
else{
  return y
}}
 )
 console.log(x)
 setData(x)
 console.log(quantity)  
 console.log(obj.cart)
  }
const handleRemoving=(obj)=>{
  var x
 x=data.map((y)=>{
  if(y.id==obj.id){
    
    return {...y,cart:y.cart-(y.cart>1?1:0)}
   
  }
  else{
return y
}
}
 )
 setData(x)
 console.log(x)
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
                    <Link  to="/Homepage" className="cart" >Home</Link>
                    <div>Profile</div>
                 <div> <div   className="cart" onClick={()=>{
                    Cart(data)
                }}>  Cart </div></div>  
                  <Link  to="/Logout" className="cart" >Logout</Link>
                    </div></div>
    <div>
    </div>
<div className="cartitems">
    <div className="itemsheader"> Cart Items</div>
{    
       data.map((data)=>{
        totalprice=totalprice+data.cart*parseInt(data.cost)
             return(
                 <div key={data.id} className="cartitemslist">
               <img className="cartitemsimage" src={data.image}></img>
                <div className="cartitemname">{data.names} </div>
                <div className="cartitemsfunction"><button className="add" onClick={()=>{
                  Remove(data)
             }}>Remove from Cart</button> </div>
             <div className="adding">
      {/* <button onClick={()=>handleAdding( data.id)}>+</button> */}
      {/* <button className="add" onClick={()=>{
                  handleAdding(data)
             }}>+</button> */}
             <div >
<button onClick={()=>handleAddProduct(data)}>+</button>
              </div>
    <div>  {data.cart}</div>
    <div>  <button onClick={()=>handleRemoving(data)}>-</button></div>
     
    </div>
              <div className="cartitemcost">{data.cart*data.cost} </div>
         </div>
         ) }
         )
         }
         <div className="totalpricename">Total price:
<div className="totalprice">{totalprice}</div>
<div className="checkoutbutton">
    <button onClick={Checkout} className="checkout">Check out</button>
    {/* <button className="checkout"  onClick={()=>{
                     Checkout()
               }}>Checkout</button>  */}
               </div>
         </div>
         </div>
        </div>
 );
}
export default Cart;