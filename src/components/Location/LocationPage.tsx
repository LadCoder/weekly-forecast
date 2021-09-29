import React from 'react'
import Header from '../Header/Header'
import { LocationForm } from './LocationForm'
import styles from './LocationPage.module.css'

/**
 * Allows the user to search for the weather forecast of a given location.
 * @return {JSX.Element} The form
 */
export function LocationPage(): JSX.Element {
  const onSearch = () => {}
  return (
    <div className={styles.wrapper}>
      <Header title="Weekly Forecast" />
      <div className={styles.data}>
        <LocationForm onSearch={onSearch} />
        {/* Error */}
        {/* Loader */}
        {/* Forecast */}
      </div>
    </div>
  )
}
