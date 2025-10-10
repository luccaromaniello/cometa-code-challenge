export function formatDateTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = (now.getTime() - new Date(date).getTime()) / 1000

  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })

  const divisions: { amount: number; unit: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, unit: 'second' }, // up to 60s → seconds
    { amount: 60, unit: 'minute' }, // up to 60min → minutes
    { amount: 24, unit: 'hour' }, // up to 24h → hours
    { amount: 30, unit: 'day' }, // up to 30d → days
    { amount: 12, unit: 'month' }, // up to 12mo → months
    { amount: Infinity, unit: 'year' }, // beyond → years
  ]

  let duration = diffInSeconds
  for (const { amount, unit } of divisions) {
    if (duration < amount) {
      return rtf.format(-Math.floor(duration), unit)
    }
    duration /= amount
  }

  return rtf.format(-Math.floor(duration), 'year')
}

export function formatDateLong(date: Date): string {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const parts = formatter.formatToParts(new Date(date))

  const day = parts.find((p) => p.type === 'day')?.value
  const month = parts.find((p) => p.type === 'month')?.value
  const year = parts.find((p) => p.type === 'year')?.value

  if (!day || !month || !year) return ''

  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  return `${day} de ${capitalizedMonth}, ${year}`
}
