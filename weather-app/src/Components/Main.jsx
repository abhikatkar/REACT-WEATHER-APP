import "../Components/Main.css"
import { BsFillSunFill } from 'react-icons/bs';
import { MdNightsStay } from 'react-icons/md';
import axios from "axios";
import { useEffect, useState } from "react";

export const Main = ({value})=>{

    const [data1, setData1] = useState([]);

    const [data2, setData2] = useState([]);

    const z = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAWelLTPW340QBxVkEDipz0q9cODb0T8GI&q=${value}`;

useEffect(()=>{
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric")
    .then((res) => {setData1(res.data)
        console.log(res.data);
        
    });
    
},[]);

useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric`)
    .then((res) => {setData2(res.data)
        // console.log(res.data);
    });
    
},[value]);

   
    
    


    return(
        <div className="main">
           <div className="first-container">
               <div className="box-1">
                   <h3>{data1.name}</h3>
                   <h1>23<sup>o</sup>C</h1>
                   <h3></h3>
               </div>
               <div className="box-2">
                   <p>Felt Temp. - 23.85<sup>o</sup>C</p>
                   <p>Humidity - 76%</p>
                   <p>Wind - 13.21 km/h</p>
                   <p>Visibility - 10.00 Km</p>
                   <p>Max Temp. - 23.48<sup>o</sup>C</p>
                   <p>Min Temp. 23.48<sup>o</sup>C</p>
               </div>
               <div className="box-3">                
                           <iframe className="iframe"
                                 src={z}>
                           </iframe>      
               </div>
           </div>
           <div className="second-container">
               <div className="small-box">
                   <p>29/05/2022</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   <p>29/05/2022</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   <p>29/05/2022</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   <p>29/05/2022</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   <p>29/05/2022</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
           </div>
        </div>
    )
}