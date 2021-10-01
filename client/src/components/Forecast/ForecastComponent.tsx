import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { WeeklyForecast } from '../../types/forecast'
import { Day } from './Day'
import styles from './ForecastComponent.module.css'

interface Props {
  weeklyForecast: WeeklyForecast
}

/**
 * Displays the weekly forecast at a location
 * @param {WeeklyForecast} weeklyForecast The forecast data for a given week
 * @return {JSX.Element} The component housing the forecast data
 */
export function ForecastComponent({ weeklyForecast }: Props): JSX.Element {
  return (
    <Container className={styles.container}>
      <h3>{weeklyForecast.title}</h3>
      <Row>
        {weeklyForecast.forecasts.map((forecast) => {
          return (
            <Col key={forecast.id} className={styles.col}>
              <Day forecast={forecast} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
