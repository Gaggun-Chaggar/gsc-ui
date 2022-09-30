import { RX_DATE, RX_DATE_SPLIT } from './helpers/regex'
import { concat } from './array'
import { identity } from './identity'
import { isDate, isString } from './inspect'
import { toInteger } from './number'
export const CALENDAR_GREGORY = 'gregory'
export const CALENDAR_LONG = 'long'
export const CALENDAR_NARROW = 'narrow'
export const CALENDAR_SHORT = 'short'

export const DATE_FORMAT_2_DIGIT = '2-digit'
export const DATE_FORMAT_NUMERIC = 'numeric'

// --- Date utility methods ---

// Parse a date string, or Date object, into a Date object (with no time information)
export const parseYMD = (date: Date | string | null) => {
  if (isString(date) && RX_DATE.test(date.trim())) {
    const [year, month, day] = date
      .split(RX_DATE_SPLIT)
      .map((v) => toInteger(v, 1))
    return new Date(year!, month! - 1, day)
  } else if (isDate(date)) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }
  return null
}

// Format a date object as `YYYY-MM-DD` format
export const formatYMD = (date: Date) => {
  const dateCopy = parseYMD(date) as Date
  if (!dateCopy) {
    return null
  }
  const year = dateCopy.getFullYear()
  const month = `0${dateCopy.getMonth() + 1}`.slice(-2)
  const day = `0${dateCopy.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}

// Given a locale (or locales), resolve the browser available locale
export const resolveLocale = (
  locales: string | string[],
  calendar = CALENDAR_GREGORY
) => {
  const _locales = concat(locales).filter(identity)
  const fmt = new Intl.DateTimeFormat(_locales, { calendar })
  return fmt.resolvedOptions().locale
}

// Create a `Intl.DateTimeFormat` formatter function
export const createDateFormatter = (
  locale: string,
  options: Intl.DateTimeFormatOptions
) => {
  const dtf = new Intl.DateTimeFormat(locale, options)
  return dtf.format
}

// Determine if two dates are the same date (ignoring time portion)
export const datesEqual = (date1: Date, date2: Date) => {
  // Returns true of the date portion of two date objects are equal
  // We don't compare the time portion
  return formatYMD(date1) === formatYMD(date2)
}

// --- Date "math" utility methods (for BCalendar component mainly) ---

export const firstDateOfMonth = (date: Date | string) => {
  const dateCopy = new Date(date)
  dateCopy.setDate(1)
  return dateCopy
}

export const lastDateOfMonth = (date: Date | string) => {
  const dateCopy = new Date(date)
  dateCopy.setMonth(dateCopy.getMonth() + 1)
  dateCopy.setDate(0)
  return dateCopy
}

export const addYears = (date: Date | string, numberOfYears: number) => {
  const dateCopy = new Date(date)
  const month = dateCopy.getMonth()
  dateCopy.setFullYear(dateCopy.getFullYear() + numberOfYears)
  // Handle Feb 29th for leap years
  if (dateCopy.getMonth() !== month) {
    dateCopy.setDate(0)
  }
  return dateCopy
}

export const oneMonthAgo = (date: Date | string) => {
  const dateCopy = new Date(date)
  const month = dateCopy.getMonth()
  dateCopy.setMonth(month - 1)
  // Handle when days in month are different
  if (dateCopy.getMonth() === month) {
    dateCopy.setDate(0)
  }
  return dateCopy
}

export const oneMonthAhead = (date: Date | string) => {
  const dateCopy = new Date(date)
  const month = dateCopy.getMonth()
  dateCopy.setMonth(month + 1)
  // Handle when days in month are different
  if (dateCopy.getMonth() === (month + 2) % 12) {
    dateCopy.setDate(0)
  }
  return dateCopy
}

export const oneYearAgo = (date: Date | string) => addYears(date, -1)

export const oneYearAhead = (date: Date | string) => addYears(date, 1)

export const oneDecadeAgo = (date: Date | string) => addYears(date, -10)

export const oneDecadeAhead = (date: Date | string) => addYears(date, 10)

// Helper function to constrain a date between two values
// Always returns a `Date` object or `null` if no date passed
export const constrainDate = (
  date: Date,
  min: Date | string | null = null,
  max: Date | string | null = null
) => {
  // Ensure values are `Date` objects (or `null`)
  const dateCopy = parseYMD(date) as Date
  min = parseYMD(min) || dateCopy
  max = parseYMD(max) || dateCopy
  // Return a new `Date` object (or `null`)
  return dateCopy
    ? dateCopy < min
      ? min
      : dateCopy > max
      ? max
      : dateCopy
    : null
}
