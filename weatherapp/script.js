// // Weather fetch functionality
// if (typeof window !== 'undefined') {
//     document.getElementById('fetchWeatherBtn').addEventListener('click', function() {
//         const city = document.getElementById('cityInput').value;
//         if (!city) {
//             document.getElementById('weather').innerHTML = 'Please enter a city name.';
//             return;
//         }
//         fetch(`https://wttr.in/${city}?format=j1`)
//             .then(response => response.json())
//             .then(data => {
//                 const current = data.current_condition[0];
//                 const temp = current.temp_C;
//                 const weatherDesc = current.weatherDesc[0].value;
//                 document.getElementById('weather').innerHTML = `Weather in ${city}: ${temp}°C, ${weatherDesc}`;
//             })
//             .catch(error => {
//                 document.getElementById('weather').innerHTML = 'Error fetching weather data.';
//                 console.error('Error fetching weather data:', error);
//             });
//     });
// }
// ----------------- JSON BASICS -----------------
let user = { name: "Aveena", age: 20 };
let jsonData = JSON.stringify(user);
console.log("User JSON:", jsonData);

let text = '{"name":"Aveena","age":20}';
let obj = JSON.parse(text);
console.log("Parsed name:", obj.name);

let Student = { name: "John", age: 21 };
let jsonstring = JSON.stringify(Student);
console.log("Student JSON:", jsonstring);

let parsedobj = JSON.parse(jsonstring);
console.log("Parsed Student:", parsedobj);

let BOOK = { 
  title: "data science", 
  author: "john", 
  price: 500, 
  books: ["python", "java", "dsa"] 
};
let jsonDataBook = JSON.stringify(BOOK);
console.log("Book JSON:", jsonDataBook);

// ----------------- FETCH EXAMPLES -----------------
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("Fetched Post:", data))
  .catch(error => console.error("Error fetching post:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log("Fetched Users:");
    users.forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });
  })
  .catch(error => console.error("Error fetching users:", error));

// ----------------- WEATHER APP -----------------
const cityCoords = {
    "new york": { lat: 40.7128, lon: -74.0060 },
    "los angeles": { lat: 34.0522, lon: -118.2437 },
    "chicago": { lat: 41.8781, lon: -87.6298 },
    "houston": { lat: 29.7604, lon: -95.3698 },
    "phoenix": { lat: 33.4484, lon: -112.0740 }
};

document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("weather").innerHTML = "<p>City not found. Please try again.</p>";
        return;
    }

    let coords = cityCoords[city];

    // Using Open-Meteo free API (no key needed)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`)
        .then(res => res.json())
        .then(data => {
            let weather = data.current_weather;
            document.getElementById("weather").innerHTML =
                `<p><b>${city.toUpperCase()}</b><br>
                 Temp: ${weather.temperature}°C<br>
                 Wind: ${weather.windspeed} km/h<br>
                 time: ${weather.time}
                 </p>`;
        })
        .catch(err => {
            document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
            console.error("Weather API error:", err);
        });
});
