import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LocationForm } from '../components/Location/LocationForm'

it('renders form correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<LocationForm />)

  expect(queryByTestId('search-button')).toBeTruthy
  expect(queryByPlaceholderText('Search')).toBeTruthy
})

describe('Input value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<LocationForm />)

    const searchInput = queryByPlaceholderText('Search')

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})

describe('Search button', () => {
  describe('with empty query', () => {
    it('does not trigger the search function', () => {
      const onSearch = jest.fn()

      const { queryByTestId } = render(<LocationForm onSearch={onSearch} />)
      fireEvent.click(queryByTestId('search-button'))

      expect(onSearch.mock.calls.length).toEqual(0)
    })
  })

  describe('with location query', () => {
    it('triggers the search function', () => {
      const onSearch = jest.fn()

      const { queryByTestId, queryByPlaceholderText } = render(
        <LocationForm onSearch={onSearch} />
      )
      const searchInput = queryByPlaceholderText('Search')

      fireEvent.change(searchInput, { target: { value: 'test' } })
      fireEvent.click(queryByTestId('search-button'))

      expect(onSearch.mock.calls.length).toBeGreaterThan(0)
    })
  })
})
