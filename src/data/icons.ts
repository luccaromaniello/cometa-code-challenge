import calendar from '@assets/icons/calendar.svg'
import heart from '@assets/icons/heart.svg'
import search from '@assets/icons/search.svg'

export const iconMap = {
  calendar,
  heart,
  search,
} as const

export const iconAltMap: Record<keyof typeof iconMap, string> = {
  calendar: 'Calendar icon',
  heart: 'Heart icon',
  search: 'Search icon',
}
