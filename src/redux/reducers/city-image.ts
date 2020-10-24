import { cityImageActions } from '../actions/city-image'

interface ICityImageState {
  cityImage: string
  imageLoading: boolean
}

const initialState: ICityImageState = {
  cityImage: '',
  imageLoading: false,
}

const cityImageReducer = (state = initialState, action: cityImageActions) => {
  switch (action.type) {
    case 'SET_CITY_IMAGE':
      return {
        ...state,
        cityImage: action.payload,
      }
    case 'SET_IMAGE_LOADING':
      return {
        ...state,
        imageLoading: action.payload,
      }
    default:
      return state
  }
}

export default cityImageReducer
