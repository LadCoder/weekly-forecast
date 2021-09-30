import React from 'react'
import { Alert } from 'react-bootstrap'
import { useGetForecast } from '../../hooks/useGetForecast'
import Header from '../Header/Header'
import { Loader } from '../shared/Loader'
import { LocationForm } from './LocationForm'
import styles from './LocationPage.module.css'

/**
 * Allows the user to search for the weather forecast of a given location.
 * @return {JSX.Element} The form
 */
export function LocationPage(): JSX.Element {
  const { error, isLoading, forecast, searchLocation } = useGetForecast()
  console.log(forecast)
  return (
    <div className={styles.wrapper}>
      <Header title="Weekly Forecast" />
      <div className={styles.data}>
        {!isLoading && <LocationForm onSearch={searchLocation} />}
        {isLoading && <Loader />}
        {/* Forecast */}
      </div>
      {error && (
        <Alert title={error.name} variant="danger">
          {error.message}
        </Alert>
      )}
    </div>
  )
}
