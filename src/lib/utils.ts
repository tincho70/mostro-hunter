import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncates a given text to a specified maximum length adding [...] in the middle.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} maxLength - The maximum length of the text.
 * @return {string} The truncated text.
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  const mid = Math.floor(maxLength / 2);
  const start = text.substring(0, mid);
  const end = text.substring(text.length - mid);
  return `${start}...${end}`;
};

/**
 * Formats a given amount of satoshis into a string with the format '#,###'.
 *
 * @param {number | string} amount - The amount of satoshis to be formatted.
 * @return {string} The formatted amount of satoshis.
 */
export const formatSats = (amount: number | string): string => {
  if (typeof amount === 'string') {
    amount = parseInt(amount, 10);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(amount);
};
