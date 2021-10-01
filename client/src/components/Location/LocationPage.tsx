import React from 'react'
import { Alert } from 'react-bootstrap'
import { useGetForecast } from '../../hooks/useGetForecast'
import { ForecastComponent } from '../Forecast/ForecastComponent'
import { Loader } from '../shared/Loader'
import styles from './LocationPage.module.css'
import { NavbarComponent } from '../shared/NavbarComponent'
import { useWindowSize } from '../../hooks/useWindowSize'
import { LocationForm } from './LocationForm'

/**
 * Allows the user to search for the weather forecast of a given location.
 * @return {JSX.Element} The form
 */
export function LocationPage(): JSX.Element {
  const { error, isLoading, forecast, searchLocation } = useGetForecast()
  const { width } = useWindowSize()

  return (
    <div className={styles.page}>
      <NavbarComponent onSearch={searchLocation} />
      {width < 768 && <LocationForm onSearch={searchLocation} />}
      <div className={styles.content}>
        {isLoading && <Loader />}
        {!isLoading && forecast && (
          <ForecastComponent weeklyForecast={forecast} />
        )}
        {error && (
          <Alert title={error.name} variant="danger">
            {error.message}
          </Alert>
        )}
      </div>
    </div>
  )
}
