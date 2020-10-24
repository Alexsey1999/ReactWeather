import React from 'react'

// Redux utils
import { useDispatch, useSelector } from 'react-redux'

// Components
import WeatherImage from './WeatherImage'
import WeatherSearch from './WeatherSearch'
import WeatherInfo from './WeatherInfo'

// Actions
import { fetchWeather } from '../redux/actions/weather'
import { IWeatherObj } from '../redux/actions/weather'

export interface IState {
  weatherReducer: {
    city_weather: IWeatherObj
  }
  loadingReducer: {
    isLoading: boolean
  }
  cityImageReducer: {
    cityImage: string
    imageLoading: boolean
  }
}

const Main: React.FC = () => {
  const dispatch = useDispatch()

  const weather_obj: IWeatherObj = useSelector(
    (state: IState) => state.weatherReducer.city_weather
  )

  const isLoading = useSelector(
    (state: IState) => state.loadingReducer.isLoading
  )

  React.useEffect(() => {
    dispatch(fetchWeather('London'))
  }, [dispatch])

  return (
    <div className="main">
      <div className="main-content">
        <div className="main-wrapper">
          <WeatherImage />
          <div className="weather-info-block">
            <WeatherSearch />
            <WeatherInfo weather_obj={weather_obj} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
