export const baseUrl = 'https://www.metaweather.com/api/location/'
export const proxyUrl = 'http://localhost:4000/'

export const requestUrl = `${proxyUrl}${baseUrl}`

export const imgUrlBase = 'https://www.metaweather.com/static/'
export const weatherImageUrl = (imageName: string) =>
  `${imgUrlBase}img/weather/${imageName}.svg`
