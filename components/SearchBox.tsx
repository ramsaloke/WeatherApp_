'use client'
import React, { useState , FormEvent, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

type Data = {
  city: string
  temp : number,
   maxTemp: number
  minTemp:number
  humidity: number
  feelsLike: number
  description:string
}

type updateDataProps = {
  updateData: (newData:Data) => void
}

const SearchBox:React.FC<updateDataProps> = ({updateData}) => {
  const [city , setCity] = useState<string>('');
  const [error,setError] = useState<boolean>(false)

  const API_URL= process.env.NEXT_PUBLIC_WEATHER_API_URL;
  const API_KEY= process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const WeatherInfo = async () =>{
    try{
      let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
  
     let  result:Data = {
      
      city: city,
        temp : jsonResponse.main.temp,
        maxTemp : jsonResponse.main.temp_max,
        minTemp : jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like, 
        description: jsonResponse.weather[0].description
     };
     console.log(result)
     return result;
    } catch(err){
      throw err;
    } 
  }

const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
setCity(event.target.value);

}

const handleSubmit = async (event:FormEvent<HTMLFormElement>) =>{
  try{
    event.preventDefault();
    console.log(city)
    setError(false)
    setCity('');
    let newInfo = await WeatherInfo();
    updateData(newInfo)
  } catch(err) {
    setError(true)
  }
}


  return (
    <main>
    <div className='flex items-center justify-center mt-5'>
      <div className='text-center'> 
      <h3 className='text-2xl font-semibold mb -2'>Search for the weather</h3>   

      <form onSubmit={handleSubmit} className='mt-2'>
      <TextField id="city" label="Enter City Name" variant="outlined"
       type='text' value={city} required
       onChange={handleChange}
       ></TextField>
      <br></br> <br></br>
      <Button variant="contained" type='submit'>Search</Button>
      {error && <p className='text-red-500 font-semibold mt-2'> No such place exists! please try agian </p>}
      </form>
    </div>
    </div>
    </main>
  )
}

export default SearchBox