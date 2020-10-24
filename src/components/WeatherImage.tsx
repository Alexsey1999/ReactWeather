import React from 'react'

// Redux utils
import { useDispatch, useSelector } from 'react-redux'
import { fetchCityImage } from '../redux/actions/city-image'

// Components
import ImageLoader from './ImageLoader'

// Interfaces
import { IState } from './Main'

const WeatherImage: React.FC = () => {
  const dispatch = useDispatch()

  const cityImage = useSelector(
    (state: IState) => state.cityImageReducer.cityImage
  )
  const imageLoading = useSelector(
    (state: IState) => state.cityImageReducer.imageLoading
  )

  React.useEffect(() => {
    dispatch(fetchCityImage('London'))
  }, [dispatch])

  return (
    <>
      {imageLoading ? (
        <ImageLoader />
      ) : (
        <div
          className="city-image-block"
          style={{
            backgroundImage: `url(${cityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      )}
    </>
  )
}

export default WeatherImage
