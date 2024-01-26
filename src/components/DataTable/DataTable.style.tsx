import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const StyledTableContainer = styled.div`
  position: relative;
  width: 1300px;
  overflow: auto;
  overflow-x: hidden;
  min-height: 500px;
  background-color: ${theme.colors.secondaryColor};
  border-radius: 0.375rem; /* 6px */
  border: 2px solid ${theme.colors.darkGray};
`;
export const StyledTable = styled.table`
  width: 100%;
  font-size: 0.875rem;
  text-align: left;
  color: ${theme.colors.lightSecondaryColor};
  @media (rtl) {
    text-align: right;
  }
`;
export const StyledTableHeader = styled.thead`
  font-size: 0.75rem; /* 12px */
  color: ${theme.colors.lightPrimary};
  text-transform: uppercase;
`;

export const StyledHeaderColumn = styled.th<{ isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? theme.colors.dark : theme.colors.primaryColor};
  ${({ isActive }) =>
    isActive && `background:${theme.colors.primaryColor} !important;`}
  font-size: ${theme.sizes.md}px;
  font-weight: bold !important;
  & label {
    margin-right: ${theme.sizes.md}px;
  }
`;

export const StyledTableRow = styled.tr`
  cursor: pointer;
  @media (prefers-color-scheme: dark) {
    background-color: #2d3748; /* dark:bg-gray-800 */
    border-color: #374151; /* dark:border-gray-700 */
  }
  tbody &:hover {
    & td {
      color: ${theme.colors.dark} !important;
    }
    background-color: ${theme.colors.primaryColor};
  }
`;

export const StyledBodyColumn = styled.td`
  text-transform: capitalize;
  color: ${theme.colors.lightPrimary};
  font-size: ${theme.sizes.md}px;
  padding: 1rem 1.5rem; /* 16px 24px */
`;
