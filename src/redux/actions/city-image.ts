import axios from 'axios'

import { ThunkAction } from 'redux-thunk'

export interface ISetCityImage {
  type: 'SET_CITY_IMAGE'
  payload: string
}

export interface ISetImageLoading {
  type: 'SET_IMAGE_LOADING'
  payload: boolean
}

export const setCityImage = (payload: string): ISetCityImage => ({
  type: 'SET_CITY_IMAGE',
  payload,
})

export const setImageLoading = (payload: boolean): ISetImageLoading => ({
  type: 'SET_IMAGE_LOADING',
  payload,
})

export const fetchCityImage = (
  location: string
): ThunkAction<void, {}, {}, cityImageActions> => (dispatch): void => {
  dispatch(setImageLoading(true))
  axios
    .get(
      `https://api.unsplash.com/search/photos?tags=urban&query=location[${location}]&per_page=1&client_id=xpWDXVxndkR_tclYq14deI1HAoYyaICOIGaPK1brQNQ`
    )
    .then((response) => {
      dispatch(setCityImage(response.data.results[0].urls.regular))
    })
    .finally(() => {
      dispatch(setImageLoading(false))
    })
}

export type cityImageActions = ISetCityImage | ISetImageLoading
