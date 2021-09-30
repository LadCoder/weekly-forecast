import React from 'react'
import { Spinner } from 'react-bootstrap'

/**
 * Renders a spinner while loading data
 * @return {JSX.Element} The spinner
 */
export function Loader(): JSX.Element {
  return (
    <Spinner variant="primary" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
