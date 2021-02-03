import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, Header, Icon } from 'semantic-ui-react'

class App extends Component {
  state = {
    weatherInfo: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async pos => {

      let { latitude, longitude } = pos.coords
      const locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=752ad146959d4bc2a0b83bc4aab0ec9a&q=${latitude}+${longitude}`)
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=1150a71ab3a6963ec3a8713f33915024&units=metric`)
      const weatherInfo = {
        location: locationResponse.data.results[0].components.city,
        temperature: weatherResponse.data.current.temp
      }
      this.setState({ weatherInfo: weatherInfo })


    })
  }
  render() {
    return (

      <div data-cy="weather-display">
        <Container>
          <Grid  className="padding-top">
            <Grid.Row centered>
              <Header data-cy="location" data-cy="temp" icon>
                <Icon name="sun" size="massive" />
        This is your location: {this.state.weatherInfo.location}
                <br></br>
        The temperature at your location: {this.state.weatherInfo.temperature}
              </Header>

            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
