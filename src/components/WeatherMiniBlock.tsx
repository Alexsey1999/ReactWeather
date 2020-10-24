import React from 'react'

interface IProps {
  option: string
  optionValue: string
  mesure?: string
}

const WeatherMiniBlock: React.FC<IProps> = ({
  option,
  optionValue,
  mesure,
}) => {
  return (
    <div className="weather-mini-block">
      <span className="weather-option">{option}:</span>
      {optionValue}
      {mesure ? mesure : ''}
    </div>
  )
}

export default WeatherMiniBlock
