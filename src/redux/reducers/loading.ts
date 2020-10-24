import { loadingActions } from '../actions/loading'

interface ILoadingState {
  isLoading: boolean
}

const initialState: ILoadingState = {
  isLoading: false,
}

const loadingReducer = (state = initialState, action: loadingActions) => {
  switch (action.type) {
    case 'SET_ISLOADING':
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export default loadingReducer
