// Convert date to string in YYYY-MM-DD format
export const FormatDate = (date: Date): string => {
    return date.toLocaleDateString('en-CA'); // 'en-CA' ensures the format is YYYY-MM-DD
};