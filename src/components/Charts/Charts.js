import React,{useEffect,useState} from 'react';
import { fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2'
import './Charts.css'

const Charts = ({data: { confirmed,deaths,recovered },country}) => {
    const [dailyData,setDailyData] =useState([]);
useEffect(() =>{
    const fetchAPI = async () =>{
        setDailyData(await fetchDailyData());
    }
    

    fetchAPI();
},[dailyData])

const lineChart =(
  dailyData.length?(<Line
  data={{
      labels:dailyData.map(({ date }) => date),
      datasets:[{
         data:dailyData.map(({ confirmed }) => confirmed),
         label:'infected',
         borderColor:'#3333ff',
         fill:true,
      },{
        data:dailyData.map(({ deaths }) => deaths),
         label:'Deaths',
         borderColor:'red',
         backgroundColor:'rgb(255,0,0,0.5)',
         fill:true,
      }]
  }}
  />) : null

);

const barchar=(
    confirmed
    ?(
        <Bar
          data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                labels:'People',
                backgroundColor:[
                    'rgb(0,0,255,0.5)',
                    'rgb(0,255,0,0.5)',
                    'rgb(255,0,0,0.5)',
                ],
                data:[confirmed,recovered,deaths]
            }]
          }}
          options={{
              legend:{display:false},
              title:{display:true,text:`current state in ${country}` }
          }}
        />
    ) :null
)

    return (
        <div className='chart__container'>
          {country ? barchar : lineChart}
         
        </div>
    )
}

export default Charts
