import { weatherActions } from '../actions/weather'

interface IWeatherState {
  city_weather: {}
}

const initialState: IWeatherState = {
  city_weather: {},
}

const weatherReducer = (state = initialState, action: weatherActions) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        city_weather: action.payload,
      }
    default:
      return state
  }
}

export default weatherReducer
