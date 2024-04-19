class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.weather = null;
    }

    async getWeatherByCity(cityName) {
        try {
            const weatherData = await this.weatherService.getWeatherByCity(cityName);
            this.weather = new Weather(
                cityName,
                weatherData.main.temp,
                weatherData.weather[0].description,
                weatherData.main.humidity
            );
            this.updateView();
        } catch (error) {
            console.error('Error getting weather data:', error);
        }
    }

    updateView() {
        const weatherInfoElement = document.getElementById('weather-info');
        if (this.weather) {
            weatherInfoElement.innerHTML = `
                <h2>${this.weather.city}</h2>
                <p>Temperature: ${this.weather.temperature} °C</p>
                <p>Description: ${this.weather.description}</p>
                <p>Humidity: ${this.weather.humidity}%</p>
            `;
        } else {
            weatherInfoElement.innerHTML = '<p>No weather data available</p>';
        }
    }
}
