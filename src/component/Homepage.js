import React, { useState } from "react";  
import { FaSearch } from "react-icons/fa";
import stylish from './stylish.jpg'
import sarees from './sarees.jpg'
import kids from './kids.jpg'
import party from './party.jpg'
import mens from './mens.jpg'
import dress from './dress.jpg'
import jewellary from './jewellary.jpg'
import heart from './heart.jpg'
import share from './share.jpg'
import { Link, Navigate,useLocation, useNavigate } from "react-router-dom";
function Homepage(){
    const location=useLocation()
    const Navigate=useNavigate()
    console.log(location)
    console.log(typeof(location))
    const navigate=useNavigate();
    const [add,setAdd]=useState(0)
    const [names,setNames]=useState()
    const [cost,setCost]=useState()
    const [image,setImage]=useState()
    const [state,setState]=useState()
    const [quantity,setQuantity]=useState(1)
    const [data,setData]=useState([])
    const [button,setButton]=useState(false)
    const [total,setTotal]=useState(0)
    const x=[
        {
            cart:0,
            id:"a",
            name:"Kurtas for women",
            image:stylish,
            icon:heart,
            icon1:share,
            cost:600,
            names:"Avasa Stylish kurtas for Women",
            quantity:1
        },
        {
            id:"b",
            cart:0,
            name:"Kids-wear",
            image:kids,
            icon:heart,
            icon1:share,
            cost:"600",
            names:"Combination Of Both Girls And Boys Stylish Kids Wear"
        },
        {
            id:"c",
            cart:0,
            name:"Party-wear",
            image:party,
            icon:heart,
            icon1:share,
            cost:"2000",
            names:"Pink Sequence Embroidered Dola Net Style Gown"
            
        },
        {
            cart:0,
            id:"d",
            name:"Sarees for women",
            image:sarees,
            icon:heart,
            icon1:share,
            cost:"1000",
            names:"The Silk Beige Beautiful Banarasi with Rich Pallu"
        },
        {
            cart:0,
            id:"e",
            name:"Mens-wear",
            image:mens,
            icon:heart,
            icon1:share,
            cost:"1000",
            names:"Blueberry Frenzy Pant-shirt For Men"
        },
        {
            cart:0,
            id:"f",
            name:"Dressmaterials",
            image:dress,
            icon:heart,
            icon1:share,
            cost:"600",
            names:"Blue and Orange Cotton Dress Material"
        },
        {
            cart:0,
            id:"g",
            name:"Jewellery",
            image:jewellary,
            icon:heart,
            icon1:share,
            cost:"200",
            names:"Silver Beautiful Jewellery For Women  "
        },
    ]
    function Add(obj){
    setAdd(add+1)
    setData([...data,obj])
    console.log("data is",data)
    console.log(obj.id)
    console.log(obj.cart)
    console.log(total)
    setTotal(total)
    }
    function Cart(){
        Navigate("/Cart",{state:data})
        console.log(data)
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
                <Link to="/Logout" className="cart">Logout</Link>
                    </div></div>
         <div className="mainone">
            {
         x.map((data)=>{
            return( 
                <div>
                <div className="container">
                <div className="cards">
                {/* setTotal(total=>total+data.cost) */}
                <div><img className="image" src={data.image}></img></div>
                <div  className="names">{data.name}</div>
            </div>
            </div>
            <div className="photos">
            <div><img className="images" src={data.image}></img></div>
            <div >
            <div className="cost">  {data.cost}</div>
            <div> {data.names}</div></div>
           <button className="add" onClick={()=>{
                    Add(data)
                }}>Add to cart</button>
            </div>
             </div>
        ) }
         )
            }
        </div>
        </div>
    );
}      
export default Homepage;