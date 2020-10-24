import { combineReducers } from 'redux'

import weatherReducer from './weather'
import loadingReducer from './loading'
import cityImageReducer from './city-image'

const rootReducer = combineReducers({
  weatherReducer,
  loadingReducer,
  cityImageReducer,
})

export default rootReducer
