import { format } from 'date-fns';
export function formatDateToString(
  date: string | Date,
  dateFormat: string = 'MMM dd, yyyy'
): string {
  return format(date, dateFormat);
}

export function parseToDecimal(value: string | number): string {
  const temp = Number(value);
  const currentNumber = isNaN(temp) ? 0 : temp;
  return currentNumber.toLocaleString('en-US');
}
