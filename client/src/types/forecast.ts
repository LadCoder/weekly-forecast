/* eslint-disable no-unused-vars */
export interface Forecast {
  id: string
  date: Date
  minTemp: number
  maxTemp: number
  weatherState: string
}

export interface WeeklyForecast {
  woeid: string
  title: string
  forecasts: Forecast[]
}
