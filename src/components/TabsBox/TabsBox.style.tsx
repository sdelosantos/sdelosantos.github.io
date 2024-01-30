import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const StyledTabWrapper = styled.div<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? `
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.dark};
    `
      : `
    background-color: ${theme.colors.lightSecondaryColor};
    color: ${theme.colors.lightPrimary};
    `};
  border-radius: 5px 5px 0px 0px;
  width: fit-content;
  padding: 2px 10px;
  cursor: pointer;
`;
export const StyledTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.sizes.md}px;
  font-weight: 400;
  width: fit-content;
  height: 100%;
`;
export const StyledTabsBox = styled.div``;
export const StyledTabsContainer = styled.section`
  position: relative;
  height: ${theme.sizes.sizeFactorOf(4)}px;
  width: fit-content;
  display: flex;
  gap: ${theme.sizes.sm}px;
`;
export const StyledTabsBodyContainer = styled.section`
  padding: ${theme.sizes.sm}px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.lightSecondaryColor};
  position: relative;
  background-color: ${theme.colors.secondaryColor};
`;
