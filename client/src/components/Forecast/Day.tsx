import React from 'react'
import { Card } from 'react-bootstrap'
import { weatherImageUrl } from '../../types/paths'
import { getDayOfTheWeek } from '../../helpers/getDayOfTheWeek'
import { Forecast } from '../../types/forecast'
import styles from './Day.module.css'

interface Props {
  forecast: Forecast
}

/**
 * Displays the forecast for a given day
 * @param {Forecast} forecast The forecast data for a given week
 * @return {JSX.Element} The component housing the forecast data
 */
export function Day({ forecast }: Props): JSX.Element {
  return (
    <Card className={styles.wrapper}>
      <img width="50" src={weatherImageUrl(forecast.weatherState)} alt="" />
      <span className={styles.title}>{getDayOfTheWeek(forecast.date)}</span>
      <span>
        <span className={styles.title}>Max: </span>
        {forecast.maxTemp}&deg;
      </span>
      <span>
        <span className={styles.title}>Min: </span>
        {forecast.minTemp}&deg;
      </span>
    </Card>
  )
}
