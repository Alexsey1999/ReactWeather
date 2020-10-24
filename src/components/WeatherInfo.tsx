import React from 'react'

// Components
import Loader from './Loader'
import WeatherMiniBlock from './WeatherMiniBlock'

// Interfaces
import { IWeatherObj } from '../redux/actions/weather'

interface IProps {
  weather_obj: IWeatherObj
  isLoading: boolean
}

const WeatherInfo: React.FC<IProps> = ({ weather_obj, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : Object.keys(weather_obj).length ? (
        <div className="wheather-info">
          <div className="city">{weather_obj.location.name}</div>
          <div className="weather-info-card">
            <div className="weather-left">
              <WeatherMiniBlock
                option="Weather"
                optionValue={weather_obj.current.condition.text}
              />
              <WeatherMiniBlock
                option="Temperature"
                optionValue={weather_obj.current.temp_c}
              />
              <WeatherMiniBlock
                option="Description"
                optionValue={weather_obj.location.region}
              />
              <WeatherMiniBlock
                option="Visibility"
                optionValue={weather_obj.current.vis_km}
                mesure="km"
              />
              <WeatherMiniBlock
                option="Feels like"
                optionValue={weather_obj.current.feelslike_c}
                mesure="c"
              />
              <WeatherMiniBlock
                option="Pressure"
                optionValue={weather_obj.current.pressure_mb}
                mesure="mb"
              />
              <WeatherMiniBlock
                option="Humidity"
                optionValue={weather_obj.current.humidity}
              />
              <WeatherMiniBlock
                option="Feels like"
                optionValue={weather_obj.current.feelslike_c}
                mesure="c"
              />
            </div>
            <div className="weather-right">
              <div className="weather-icon">
                <img src={weather_obj.current.condition.icon} alt="" />
              </div>
              <div className="weather-timezone">
                <span className="weather-option">Code:</span>
                {weather_obj.current.condition.code}
              </div>
              <div className="weather-coordinates">
                <span className="weather-option">
                  Coordinates <br />
                </span>
                longtitude: {weather_obj.location.lon} latitude:{' '}
                {weather_obj.location.lat}
              </div>
              <div className="weather-wind">
                <span className="weather-option">
                  Wind <br />
                </span>{' '}
                speed: {weather_obj.current.wind_mph} deg:{' '}
                {weather_obj.current.wind_degree}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default WeatherInfo
