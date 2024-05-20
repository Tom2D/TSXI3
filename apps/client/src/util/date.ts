// Convert date to string in YYYY-MM-DD format (UTC timezone)
export const FormatDateUTC = (date: Date): string => {
    return date.toISOString().split('T')[0];
};