import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import axios from 'axios'

let weatherMock = {
  data: {
    current: {
      temp: 22,
      weather: [

      ]
    }
  }
}


let axiosWeatherSpy;
let axiosLocationSpy;

beforeEach(() => { 
axiosWeatherSpy = jest.spyOn(axios, 'get').mockReturnValueOnce(weatherMock)
  render(<App />)
})

it('calls weather API and get requests', () => {
  expect(axiosWeatherSpy).toHaveBeenCalledTimes(1)
})