import React from "react";
import avasa from './avasa.jpg'
import stylish from './stylish.jpg'
function Online(){
    const x=[
        {
            name:"Kurties",
            cost:700,
            cloth:"Cotton",
            // image:avasa
        },
        {
            name:"Kurties",
            cost:700,
            cloth:"Cotton",
            // image:stylish
        },
        {
            name:"Kurties",
            cost:700,
            cloth:"Cotton"
        },
        {
            name:"Kurties",
            cost:"700",
            cloth:"Cotton"
        },
        {
            name:"Kurties",
            cost:700,
            cloth:"Cotton"
        },
    ]
    return(
        <div className="main" >
         <div className="first" >
        {








            // x.map((data)=>{
            //     return(
            //     <div className="second">
            //         <img className="image" src={data.image}></img>
            //         <div>Name is:{data.name}</div>
            //         <div>Price is:{data.cost}</div>
            //         <div>Cloth type is:{data.cloth}</div>
            //     </div>
            //     )
            // })
        }
         </div>
        </div>
    )
}
export default Online;