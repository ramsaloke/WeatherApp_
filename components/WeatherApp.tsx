"use client"
import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
import { Update } from '@mui/icons-material'

type Data = {
    city: string
    temp : number,
    maxTemp: number
   minTemp:number
   humidity: number
   feelsLike: number
   description:string
}

const WeatherApp:React.FC = () => {

const [data , setData] = useState<Data>({
     
        city: "hyderabad",
        feelsLike:32.29,
        humidity:64,
        maxTemp: 39,
       minTemp: 25,
       temp : 33,
       description:"haze"
    });
    let updateData = (newData:Data) =>{
      setData(newData)
    }

  return (
    <div className='flex-col items-center bg-[#f0f4f8] min-h-screen h-screen overflow-hidden'> 
        <div>
        <SearchBox updateData={updateData}></SearchBox>
        <InfoBox dataInfo={data}></InfoBox>
        </div>
      
    </div>
  )
}

export default WeatherApp