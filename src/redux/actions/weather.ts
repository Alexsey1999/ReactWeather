import axios from 'axios'

import { ThunkAction } from 'redux-thunk'

import { setIsLoading } from './loading'

import { loadingActions } from './loading'

export interface IWeatherObj {
  location: {
    name: string
    region: string
    lat: string
    lon: string
  }
  current: {
    temp_c: string
    vis_km: string
    feelslike_c: string
    pressure_mb: string
    humidity: string
    wind_mph: string
    wind_degree: string
    condition: {
      text: string
      icon: string
      code: string
    }
  }
}

export interface ISetWeather {
  type: 'SET_WEATHER'
  payload: IWeatherObj
}

export const setWeather = (payload: IWeatherObj): ISetWeather => ({
  type: 'SET_WEATHER',
  payload,
})

type fetchWeatherActions = weatherActions | loadingActions

export const fetchWeather = (
  city: string
): ThunkAction<void, {}, {}, fetchWeatherActions> => (dispatch): void => {
  dispatch(setIsLoading(true))
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=d6e26c5b701f4e56bae125510202310&q=${city}`,
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      }
    )
    .then((response) => {
      dispatch(setWeather(response.data))
    })
    .finally(() => {
      dispatch(setIsLoading(false))
    })
}

export type weatherActions = ISetWeather
