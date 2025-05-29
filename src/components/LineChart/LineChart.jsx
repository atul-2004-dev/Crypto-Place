import React, {  useState ,useEffect} from 'react';
import {Chart} from 'react-google-charts';
const LineChart = ({historialData}) => {

 const [data,setData]=useState([["Date", "Prices"]]);




useEffect(()=>{
  let datacopy=[["Date", "Prices"]];
  if(historialData.prices){
        historialData.prices.map((item)=>{
         datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,5)

         }`, item[1]])
        })
        setData(datacopy);
  }
    },[historialData])

  return (
    <Chart
     chartType='LineChart'
     data={data}
     height="100%"
     legendToggle
    
    
    
    />
  );
}

export default LineChart;
