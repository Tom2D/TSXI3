// Convert date to string in YYYY-MM-DD format (UTC timezone)
export const FormatDateUTC = (date: Date | null): string => {
  return date ? date.toISOString().split('T')[0] : '';
};
