import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'

interface Props {
  onSearch(location: string): void
}

/**
 * Allows the user to search for the weather forecast of a given location.
 * @return {JSX.Element} The form
 */
export function LocationForm({ onSearch }: Props): JSX.Element {
  const [location, setLocation] = useState<string>('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!location || location === '') return
    onSearch(location)
  }

  return (
    <Form className={'d-flex'} onSubmit={onSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="location search"
        onChange={(e: any) => setLocation(e.target.value)}
      />
      <Button data-testid="search-button" type="submit" variant="success">
        Search
      </Button>
    </Form>
  )
}
