import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = {
    weatherInfo: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async pos => {

      let { latitude, longitude } = pos.coords
      const locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=55082dd8fb7e473db8dab86a33518599&q=${latitude}+${longitude}`)
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=1150a71ab3a6963ec3a8713f33915024&units=metric`)
      const weatherInfo = {
        location: locationResponse.data.results[0].components.postal_city,
        temperature: weatherResponse.data.current.temp
      }
      
      this.setState({ weatherInfo: weatherInfo })


    })
  }
  render() {
    return (
      <div data-cy="weather-display">
        <div data-cy="location">{this.state.weatherInfo.location}</div>
        <div data-cy="temp">{this.state.weatherInfo.temperature}℃</div>
      </div>
    );
  }
}

export default App;
