import { useState } from 'react'
import axios from 'axios'
import { Forecast, WeeklyForecast } from '../types/forecast'

const baseUrl = 'http://www.metaweather.com/api/location'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const requestUrl = `${proxyUrl}${baseUrl}`

interface ForecastResult {
  error?: Error
  isLoading: boolean
  forecast?: unknown
  searchLocation(location: string): void
}

/**
 * Get the WOEID for a given location and then return a forecast
 * @return {ForecastResult}
 */
export function useGetForecast(): ForecastResult {
  const [error, setError] = useState<Error | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forecast, setForecast] = useState<WeeklyForecast | undefined>()

  const getWoeid = async (location: string) => {
    const { data } = await axios(`${requestUrl}/search`, {
      params: { query: location }
    })

    if (!data || data.length === 0) {
      throw new Error('Could not find location')
    }

    const { woeid } = data[0]

    return woeid
  }

  const getForecastData = async (woeid: string) => {
    const { data } = await axios(`${requestUrl}/${woeid}`)

    if (!data || data.length === 0) {
      throw new Error('Could not retrieve forecast data')
    }

    const forecasts: Forecast[] = data.consolidated_weather.map(
      (forecast: any) => {
        return {
          date: forecast.applicable_date,
          minTemp: forecast.min_temp,
          maxTemp: forecast.max_temp
        }
      }
    )

    const weeklyForecast: WeeklyForecast = {
      woeid: data.woeid,
      title: data.title,
      forecasts
    }
    return weeklyForecast
  }

  const searchLocation = async (location: string) => {
    setIsLoading(true)
    setError(undefined)
    try {
      const woeid = await getWoeid(location)
      const forecastData = await getForecastData(woeid)

      setForecast(forecastData)
    } catch (error) {
      setError(error as Error)
    }
    setIsLoading(false)
  }
  return { error, isLoading, forecast, searchLocation }
}
