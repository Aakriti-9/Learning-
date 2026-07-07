
// Task 1 : Checking if the system is ready


const systemPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Task 1");
        resolve("System Ready");
    }, 2000);
});

systemPromise.then((message) => {
    console.log(message);
});



// Task 2 : Fetching data using Promise (.then())


const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,wind_speed_10m";

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Task 2");
        console.log(data.current_weather);
    })
    .catch((error) => {
        console.log(error);
    });


// Task 3 : Fetching data using Async/Await


async function getWeather() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        console.log("Task 3");
        console.log(data.current_weather);

    } catch (error) {

        console.log(error);

    }

}

getWeather();



// Task 4 : Using map() to combine time and temperature


async function weatherMap() {

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        console.log("Task 4");

        const weather = data.hourly.time.map((time, index) => ({
            time: time,
            temperature: data.hourly.temperature_2m[index]
        }));

        console.log(weather);

    } catch (error) {

        console.log(error);

    }

}

weatherMap();


// Task 5 : Filter the temperatures above 20°C


async function filterWeather() {

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        console.log("Task 5");

        const weather = data.hourly.time.map((time, index) => ({
            time,
            temperature: data.hourly.temperature_2m[index]
        }));

        const hotHours = weather.filter(
            (item) => item.temperature > 20
        );

        console.log(hotHours);

    } catch (error) {

        console.log(error);

    }

}

filterWeather();


// Task 6 : Find the first temperature below 10°C


async function findColdHour() {

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        console.log("Task 6");

        const weather = data.hourly.time.map((time, index) => ({
            time,
            temperature: data.hourly.temperature_2m[index]
        }));

        const coldHour = weather.find(
            (item) => item.temperature < 10
        );

        console.log(coldHour);

    } catch (error) {

        console.log(error);

    }

}

findColdHour();



// Task 7 : Nested Promise (London → Paris)

function londonParisWeatherPromise() {

    fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.11&current_weather=true"
    )
        .then((response) => response.json())
        .then((london) => {

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true"
            )
                .then((response) => response.json())
                .then((paris) => {

                    console.log("Task 7");

                    console.log({
                        London: london.current_weather.temperature,
                        Paris: paris.current_weather.temperature
                    });

                });

        })
        .catch((error) => {

            console.log(error);

        });

}

londonParisWeatherPromise();



// Task 8 : Async/Await (London → Paris)


async function londonParisWeatherAsync() {

    try {

        const londonResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.11&current_weather=true"
        );

        const london = await londonResponse.json();

        const parisResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true"
        );

        const paris = await parisResponse.json();

        console.log("Task 8");

        console.log({
            London: london.current_weather.temperature,
            Paris: paris.current_weather.temperature
        });

    } catch (error) {

        console.log(error);

    }

}

londonParisWeatherAsync();


// Task 9 : Fetch data in parallel using Promise.all()

async function worldWeather() {

    try {

        const urls = [

            "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.20&current_weather=true"

        ];

        const responses = await Promise.all(

            urls.map((url) => fetch(url))

        );

        const data = await Promise.all(

            responses.map((response) => response.json())

        );

        console.log("Task 9");

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

worldWeather();


// Task 10 : Complete Weather Pipeline

async function weatherPipeline() {

    try {

        const urls = [

            "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true",

            "https://api.open-meteo.com/v1/forecast?latitude=-33.86&longitude=151.20&current_weather=true"

        ];

        const responses = await Promise.all(

            urls.map((url) => fetch(url))

        );

        const weatherData = await Promise.all(

            responses.map((response) => response.json())

        );

        const formatted = weatherData.map((item, index) => ({

            id: index + 1,

            currentTemp: item.current_weather.temperature,

            windSpeed: item.current_weather.windspeed

        }));

        console.log("Task 10");

        console.log(formatted);

        const windyLocation = formatted.find(
            (location) => location.windSpeed > 15
        );

        console.log("Location with wind speed greater than 15 km/h");

        console.log(windyLocation);

    } catch (error) {

        console.log(error);

    }

}

weatherPipeline();