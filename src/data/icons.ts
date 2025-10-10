import bell from '@assets/icons/bell.svg'
import calendar from '@assets/icons/calendar.svg'
import heart from '@assets/icons/heart.svg'
import search from '@assets/icons/search.svg'
import wallet from '@assets/icons/wallet.svg'

export const iconMap = {
  bell,
  calendar,
  heart,
  search,
  wallet,
} as const

export const iconAltMap: Record<keyof typeof iconMap, string> = {
  bell: 'Bell icon',
  calendar: 'Calendar icon',
  heart: 'Heart icon',
  search: 'Search icon',
  wallet: 'Wallet icon',
}
