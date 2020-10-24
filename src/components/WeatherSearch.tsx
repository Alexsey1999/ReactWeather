import React from 'react'

// Redux utils
import { useDispatch } from 'react-redux'

// Actions
import { fetchWeather } from '../redux/actions/weather'
import { fetchCityImage } from '../redux/actions/city-image'

// Svg
import searchsvg from '../images/search.svg'

const WeatherSearch: React.FC = () => {
  const dispatch = useDispatch()

  const [city, setCity] = React.useState('')

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value)
  }

  const searchCityEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && city) {
      dispatch(fetchWeather(city))
      dispatch(fetchCityImage(city))
      return
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={setInputValue}
        value={city}
        onKeyPress={searchCityEnter}
        placeholder="Search city"
      />
      <img className="search-icon" src={searchsvg} alt="search-icon" />
    </div>
  )
}

export default WeatherSearch
