/* eslint-disable no-unused-vars */
export enum LocationType {
  City = 'city',
  Region = 'region',
  State = 'state',
  Province = 'province',
  Country = 'country',
  Continent = 'continent'
}

export interface Location {
  title: string
  locationType: LocationType
  lattLong: string
  woeid: number
}
