import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './LocationForm.module.css'

interface Props {
  onSearch: (location: string) => void
}

/**
 * Allows the user to search for the weather forecast of a given location.
 * @return {JSX.Element} The form
 */
export function LocationForm({ onSearch }: Props): JSX.Element {
  const [location, setLocation] = useState<string>('')

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (!location || location === '') return
    onSearch(location)
  }

  return (
    <Form className={styles.form} onSubmit={onSubmit}>
      <Form.Control
        as="input"
        type="text"
        placeholder="Location"
        aria-label="location"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button className={styles.button} type="submit">
        Submit
      </Button>
    </Form>
  )
}
