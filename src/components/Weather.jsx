import axios from "axios"
import { useState, useEffect } from "react"
import Loader from "./Loader"

const Weather = () => {


    const [ city, setCity ] = useState("")
    const [ weather, setWeather ] = useState({})
    
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [ isLoading, setIsLoading ] = useState (true)

    const icons = {

        "01d": "/img/01d.svg",
        "02d": "/img/02d.svg",
        "03d": "/img/03d.svg",
        "04d": "/img/04d.svg",
        "09d": "/img/09d.svg",
        "10d": "/img/10d.svg",
        "11d": "/img/11d.svg",
        "13d": "/img/13d.svg",
        "50d": "/img/50d.svg",
        "01n": "/img/01n.svg",
        "02n": "/img/02n.svg",
        "03n": "/img/03n.svg",
        "04n": "/img/04n.svg",
        "09n": "/img/09n.svg",
        "10n": "/img/10n.svg",
        "11n": "/img/11n.svg",
        "13n": "/img/13n.svg",
        "50n": "/img/50n.svg"
    
      }
    
    



    const onSubmit = (e) => {
        e.preventDefault()
        console.log({city})
        if(city === "" || !city) return; 
    }
    

    useEffect (() =>{

        navigator.geolocation.getCurrentPosition(getPosition)  //latitud y longitud 
    }, [])

        function getPosition(position) {
            const coords = position.coords
            const latitude = coords.latitude
            const longitude = coords.longitude

    
        axios
        .get (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=04818af0ff199e45bdb18d96ee520d13`)
        .then(resp =>  {
        setWeather(resp.data)
        const temp = {
            celsius: `${Math.round(resp.data.main.temp - 273.15)} °C` ,
            farenheit: `${Math.round((resp.data.main.temp - 273.15) * 9 / 5 + 32)} °F`
        }
        setTemperture(temp)
        setIsLoading(false)
    })
    .catch(err => console.log(err))
}

    
    


  

    const handleClick = () => setIsCelsius (!isCelsius)
          if(isLoading) {
          return <Loader/>
    }else{ 
    
    }


    return(
        <>
        
        
        <article className="search">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                    <button className="btn btn primary input-group text" type="submit">Search</button>
                </div>
            </form>
       
            
                <div className='weather'>
                    
                    <img className="icons" src={icons[weather.weather?.[0].icon]} alt="" />
                    
                    <h2 className='temperature'> {isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
                    
                    
                    <div className="patameters" >
                        <p>WIND: {weather?.wind.speed} m/s</p>
                        <p>CLOUDS: {weather?.clouds.all}%</p>
                        <p>PRESSURE: {weather?.main.pressure} hPa</p>
                        <p>LONGITUDE: {weather.coord?.lon}</p>
                        <p>LATITUDE: {weather.coord?.lat}</p>

                        <h3 className="description">{weather.weather?.[0]?.main} </h3>
                        <h1 className="name" >{weather?.name}, {weather?.sys.country} </h1>
                    </div>

                </div>

                <button onClick={handleClick} className='weather__btn'>{isCelsius ? 'Changing to °F': 'Changing to °C'}</button>
                </article>
            </>
        
        
        )
}

export default Weather