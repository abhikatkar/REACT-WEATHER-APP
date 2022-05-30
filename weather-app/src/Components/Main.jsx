import "../Components/Main.css"
import { BsFillSunFill } from 'react-icons/bs';
import { MdNightsStay } from 'react-icons/md';
import axios from "axios";
import { useEffect, useState } from "react";

export const Main = ({value})=>{


    const [log,setLog] = useState();

      const [lat,setLat] = useState();

      const [data2 , setData2] = useState({
        daily:[{dt:""}],

      });

    const [data1, setData1] = useState({
        main:{temp:""},
        main:{temp_min:""},
        main:{temp_max:""},
        main:{feels_like:""},
        main:{humidity:""},
        name:"",
        weather:[{main:""}],
        visibility:"",
         wind:{speed:""},
    });

   
  let z = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAWelLTPW340QBxVkEDipz0q9cODb0T8GI&q=${value!=""? value:"pune"}`;


    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric`)
        .then((res) => {setData1({...res.data})
            // console.log(res.data.coord.lon,res.data.coord.lat);  
            // setLog(res.data.coord.lon)
            // setLat(res.data.coord.lat) 
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric`)
        .then((rese) => {setData2({...rese.data})
                 
        });       
        });

        
        
    },[value]);




useEffect(()=>{
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric")
    .then((res) => {setData1({...res.data})
        // console.log(res.data.coord.lon,res.data.coord.lat);
        // setLog(res.data.coord.lon)
            // setLat(res.data.coord.lat)
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=06e57ae98533ae7240b4a10cfa49e0ee&units=metric`)
        .then((rese) => {setData2({...rese.data})
                 
        }); 
    });


    
    
},[]);



   
    


    return(
        <div className="main">
           <div className="first-container">
               <div className="box-1">
                   <h3>{data1.name!=""&&data1.name}</h3>
                   <h1>{data1.main.temp!=""&&data1.main.temp}<sup>o</sup>C</h1>
                   <h3>{data1.weather[0].main!=""&&data1.weather[0].main}</h3>
               </div>
               <div className="box-2">
                   <p>Felt Temp. - {data1.main.feels_like!=""&&data1.main.feels_like}<sup>o</sup>C</p>
                   <p>Humidity - {data1.main.humidity!=""&&data1.main.humidity}%</p>
                   <p>Wind - {data1.wind.speed!=""&&data1.wind.speed} km/h</p>
                   <p>Visibility - {data1.visibility!=""&&data1.visibility/1000} Km</p>
                   <p>Max Temp. - {data1.main.temp_max!=""&&data1.main.temp_max}<sup>o</sup>C</p>
                   <p>Min Temp. {data1.main.temp_min!=""&&data1.main.temp_min}<sup>o</sup>C</p>
               </div>
               <div className="box-3">                
                           <iframe className="iframe"
                                 src={z}>
                           </iframe>      
               </div>
           </div>
           <div className="second-container">
               <div className="small-box">
                   <p>{data2.daily[0].dt!=""&&data2.daily[0].dt}</p>
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   {/* <p>{data2.daily[1].dt!=""&&data2.daily[1].dt}</p> */}
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   {/* <p>{data2.daily[2].dt!=""&&data2.daily[2].dt}</p> */}
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   {/* <p>{data2.daily[3].dt!=""&&data2.daily[3].dt}</p> */}
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
               <div className="small-box">
                   {/* <p>{data2.daily[4].dt!=""&&data2.daily[4].dt}</p> */}
                   <p>Sunday</p>
                   <p><BsFillSunFill /> 30<sup>o</sup>C</p>
                   <p><MdNightsStay /> 23<sup>o</sup>C</p>
                   <p>clear</p>
               </div>
           </div>
        </div>
    )
}