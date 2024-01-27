import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const StyledDetailContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  padding: 1px;
  box-sizing: border-box;
`;

export const StyledDetailRow = styled.div<{ columns: number }>`
  width: 100%;
  height: fit-content;
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  margin-bottom: 16px;
`;
export const StyledFieldContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
export const StyledFieldLabel = styled.label`
  font-size: ${theme.sizes.xl}px;
  color: ${theme.colors.primaryColor};
  text-align: left;
  text-transform: capitalize;
  margin-right: 5px;
`;
export const StyledFieldValue = styled.span`
  font-size: ${theme.sizes.x}px;
  color: ${theme.colors.lightPrimary};
  text-align: left;
  text-transform: capitalize;
  padding: 5px 5px;
  background: ${theme.colors.darkGray};
  border-radius: 2px;
`;
