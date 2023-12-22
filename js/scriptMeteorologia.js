
const weatherTop = document.getElementById("weatherTop");
const weatherBottom = document.getElementById("weatherBottom");
console.log(weatherBottom)

async function estacionMeteorologica () {
    const apiKey = "8d770403081647aebe5165731231612"
    const ciudad = "bilbao";
    const tiempoEnlace = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no`
    try {
        const response = await fetch(tiempoEnlace);
        if (!response.ok) {
          throw new Error('Ha surgido un error');
        }
        const data = await response.json();
        // console.log(data)
        const location = data.location;
        const current = data.current;
        const forecast =data.forecast.forecastday[0].hour
  
        
        weatherTop.innerHTML= `
        <h2> ${location.name}/${location.region}</h2>
        <p>${current.condition.text}</p>
        <div class="current">
            <div class="currentGradrosEIconos">
                <img class="iconoTiempo" src="http:${current.condition.icon}">
                <div class="grados">${current.temp_c}</div>
                <img class="inconoCelcius" src="./icon/celcius.png">
            </div>
            <div class="currentRestoDatos">
                <ul>
                    <li>Precipitaciones: ${current.precip_in}%</li>
                    <li>Humedad: ${current.humidity}%</li>
                    <li>Viento: ${current.wind_kph} Km/h</li>
                </ul>
            </div>
        </div>`
        
        
        forecast.forEach( (forecastPorHoras) => {
            console.log(forecastPorHoras);
            const horaSinFecha = forecastPorHoras.time.split(" ")[1];
            weatherBottom.innerHTML += `
            <ul class="forecast">
                <li class="forecastPorHoras">
                    <span>${horaSinFecha}</span>
                    <span>
                        <img class="meteorologiaIcono" src="http:${forecastPorHoras.condition.icon}" alt="${forecastPorHoras.text}">
                        <p>${forecastPorHoras.temp_c} °C</p>
                    </span>
                </li>
            </ul>`
        })
         
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }


}


estacionMeteorologica()