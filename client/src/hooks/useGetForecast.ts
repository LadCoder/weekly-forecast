import { useState } from 'react'
import axios from 'axios'
import { Forecast, WeeklyForecast } from '../types/forecast'
import { requestUrl } from '../types/paths'

interface ForecastResult {
  error?: Error
  isLoading: boolean
  forecast?: WeeklyForecast
  searchLocation(location: string): void
}

/**
 * Get the WOEID for a given location and then return a forecast
 * @return {ForecastResult}
 */
export function useGetForecast(): ForecastResult {
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forecast, setForecast] = useState<WeeklyForecast | undefined>(
    undefined
  )

  const getWoeid = async (location: string) => {
    const { data } = await axios(`${requestUrl}search/`, {
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

    // Cut the forecast to a 5 day week
    const forecastData = data.consolidated_weather.slice(0, -1) || []

    const forecasts: Forecast[] = forecastData.map((forecast: any) => {
      return {
        id: forecast.id,
        date: forecast.applicable_date,
        minTemp: Math.round(forecast.min_temp),
        maxTemp: Math.round(forecast.max_temp),
        weatherState: forecast.weather_state_abbr
      }
    })

    const weeklyForecast: WeeklyForecast = {
      woeid: data.woeid,
      title: data.title,
      forecasts
    }
    return weeklyForecast
  }

  const searchLocation = async (location: string) => {
    setForecast(undefined)
    setIsLoading(true)
    setError(undefined)
    try {
      const woeid = await getWoeid(location)
      const forecastData = await getForecastData(woeid)

      if (!forecastData) {
        throw new Error('Could not retrieve forecast data')
      }

      setForecast(forecastData)
    } catch (error) {
      setError(error as Error)
    }
    setIsLoading(false)
  }

  return { error, isLoading, forecast, searchLocation }
}
