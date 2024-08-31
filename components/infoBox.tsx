import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';


type Data = {
  city: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  feelsLike: number;
  description: string;
};

interface InfoBoxProps {
  dataInfo: Data;
}

const InfoBox:React.FC <InfoBoxProps> =  ({dataInfo}) => {
  
const RAIN_URL="/weather_images/rain.jpg"
const COLD_URL= "/weather_images/winter.jpg"
const SUN_URL="/weather_images/summer.jpg"


  return (
    <div className="flex items-center justify-center text-center mt-2" >
    <div>
        <h1 className='text-2xl font-bold mb-2 '>Weather Info of 
    <i className='text-violet-600 text-2xl'> {dataInfo.city}</i> </h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={dataInfo.humidity>80 ? RAIN_URL : dataInfo.temp > 18 ? SUN_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dataInfo.city} {dataInfo.humidity>80 ? <ThunderstormIcon/>  : dataInfo.temp > 18 ? <LightModeSharpIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" component={"span"}>
         <div className=' text-gray-700'>
         <p>Temprature : <b>{dataInfo.temp}&deg;C </b></p>
         <p>Humidity : <b>{dataInfo.humidity}&deg;C </b></p> 
         <p>Min Temperature : <b>{dataInfo.minTemp}&deg;C </b></p>
         <p>Max Temperature : <b>{dataInfo.maxTemp}&deg;C </b></p>
         <p>Weather can be described as <b>{dataInfo.description}</b> and feels like <b>
          {dataInfo.feelsLike}&deg;C </b></p>
      
     
         </div>


        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default InfoBox