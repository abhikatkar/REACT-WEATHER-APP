import { useState } from "react";
import "../Components/Navbar.css";


export const Navbar = ({getItemParent}) => {

    const [item , setItem] = useState("");


    return(
        <div className="nav">
            <div>
            <input onChange={(e)=>(setItem(e.target.value))} className="search" type="text" />
            <button onClick={()=>{getItemParent(item)}}  className="btn">Search</button>
            </div>
            
        </div>
    )
}