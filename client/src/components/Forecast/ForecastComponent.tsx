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
      <Row>
        {weeklyForecast.forecasts.map((forecast) => {
          return (
            <Col
              key={forecast.id}
              className="col-lg-2 col-md-2 col-sm-2 col-xs-4"
            >
              <Day forecast={forecast} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
