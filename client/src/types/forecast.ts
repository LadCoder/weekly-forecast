export interface Forecast {
  day: Date
  minTemp: number
  maxTemp: number
  weatherState: string
}

export interface WeeklyForecast {
  woeid: string
  title: string
  forecasts: Forecast[]
}
