import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledScreenWrapper = styled.section`
  width: fit-content;
  height: fit-content;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${theme.colors.secondaryColor};
  border-radius: 5px;
  overflow: auto;
`;
export const StyledScreenTitleBar = styled.section`
  width: 100%;
  box-sizing: border-box;
  height: ${theme.sizes.sizeFactorOf(8)}px;
  background-color: ${theme.colors.darkGray};
  padding: ${theme.sizes.x}px;
`;

export const StyledScreenContainers = styled.section`
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: ${theme.sizes.x}px;
`;

export const StyledScreenTitle = styled.h1`
  font-family: StartJedi;
  font-size: ${theme.sizes.xxl}px;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.sizes.xxl}px;
  font-weight: bold;
  color: ${theme.colors.primaryColor};
`;
