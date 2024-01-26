export const HEADER_HEIGH = 100;
const sizeFactorOf = (size: number) => 8 * size;

export const theme = {
  colors: {
    dark: '#000000',
    darkGray: '#20252d',
    primaryColor: '#e5ba35',
    secondaryColor: '#2d3748',
    lightPrimary: '#d5d5d5',
    lightSecondaryColor: '#4a5568',
    textColor: '#fff',
    secondaryTextColor: '#718096',
  },
  sizes: {
    sm: sizeFactorOf(1),
    md: sizeFactorOf(1.5),
    x: sizeFactorOf(2),
    xl: sizeFactorOf(2.5),
    xxl: sizeFactorOf(3),
    sizeFactorOf,
  },
};
