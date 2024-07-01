import { Dayjs } from 'dayjs';

export const DATE_FORMAT = 'YYYY-MM-DD';

// Convert date to string in YYYY-MM-DD format (UTC timezone)
export const FormatDateUTC = (date: Dayjs | null): string => {
  return date ? date.toISOString().split('T')[0] : '';
};
