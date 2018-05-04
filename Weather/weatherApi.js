const rootUrl ='http://openweathermap.org/data/2.5/weather?appid=0e715eb83d87d64e2159212cc5f94d9f'
export const fetchWeather = (lat,lon) =>{
    const url = rootUrl+'&lat='+lat+'& lan='+lon

    return fetch(url)
    .then(res => res.json())
    .then(json => ({
        temp: json.main.temp,
        weather : json.weather[0].main
    })) 

    
} 
