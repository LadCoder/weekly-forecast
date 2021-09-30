import moment from 'moment'

export const getDayOfTheWeek = (date: Date) => moment(date).format('dddd')
