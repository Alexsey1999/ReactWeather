export interface ISetIsLoading {
  type: 'SET_ISLOADING'
  payload: boolean
}

export const setIsLoading = (payload: boolean): ISetIsLoading => ({
  type: 'SET_ISLOADING',
  payload,
})

export type loadingActions = ISetIsLoading
