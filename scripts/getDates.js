const modified = document.getElementById('lastModified');
let currentDate = new Date(document.lastModified);
let formattedDate = currentDate.toLocaleString();
modified.innerHTML += formattedDate;


// obtaining the current year
let currentYear= new Date();

let year = currentYear.getFullYear();

document.getElementById("currentYear").innerText= year;


/*Api weather */

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-38.00&lon=-57.53&appid=7e14a48c2ba7cbfc26c38a57f084f9a3' 
const weatherElement= document.querySelector('#weather')
const imagen= document.querySelector('#img-icon')
const captionDesc= document.querySelector('#description')

async function apiFetch() {
    try{
         const response = await fetch(url);
         if (response.ok){
            const data = await response.json();
    console.log(data); // temporary testing of data retreival
        // Actualizar los elementos del DOM con los datos meteorológicos
        const tempKelvin = data.current.temp;
        const tempCelsius = tempKelvin - 273.15;
        const tempFahrenheit = (tempKelvin - 273.15) * 9/5 + 32;

        weatherElement.textContent = `Temperatura: ${tempCelsius.toFixed(2)} °C / ${tempFahrenheit.toFixed(2)} °F`;;
        imagen.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
        captionDesc.textContent = data.current.weather[0].description;  
    
    } else{
        throw Error (await response.text());
    } 
    }   catch (error){
        console.log(error);
    }
}
apiFetch();