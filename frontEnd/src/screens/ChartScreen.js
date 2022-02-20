import React,  {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import axios from 'axios'

function ChartScreen() {
    const [chartData, setChartData] = useState({
        labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[
          {
            label:'Number of Policies',
            data:[],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(216, 130, 216,0.6)',
              'rgba(128, 128, 255,0.6)',
              'rgba(210, 121, 121,0.6)',
              'rgba(255, 51, 153,0.6)',
              'rgba(0, 179, 179,0.6)',
              'rgba(102, 204, 0,0.6)',
              'rgba(255, 71, 26,0.6)',
            ]
          }
        ]
      
    })

    const [region , setRegion] = useState('')
useEffect(() => {

    console.log(region)
axios.post('/api/insurance/chart-screen',{region:region}).then((res)=>{
    setChartData({
        ...chartData,
        labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[
          {
            label:'Number of Policies',
            data:res.data.countMonths,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(216, 130, 216,0.6)',
              'rgba(128, 128, 255,0.6)',
              'rgba(210, 121, 121,0.6)',
              'rgba(255, 51, 153,0.6)',
              'rgba(0, 179, 179,0.6)',
              'rgba(102, 204, 0,0.6)',
              'rgba(255, 71, 26,0.6)',
            ]
          }
        ]
      
    })
  }).catch((error)=>{
        console.log(error)
  })
  },[region])
const handleInputChange= (event) =>{
        
       setRegion(event.target.value)
    }
  
  return (
    <div className='chart'>
        
        <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Region :</label>
                                    <select className="form-control" name="city" onChange={handleInputChange}>
                                        <option selected>Select Region</option>
                                        <option value="East">EAST</option>
                                        <option value="West">WEST</option>
                                        <option value="South">SOUTH</option>
                                        <option value="North">NORTH</option>
                                    </select>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        <Bar 
        data={chartData}
        options={{
            title:{
              display:true,
              text:'Number of Policies',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}/>
        </div>
  )
}

export default ChartScreen