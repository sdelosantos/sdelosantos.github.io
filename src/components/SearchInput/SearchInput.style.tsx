import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const StyledSearchContainer = styled.div`
  background-color: ${theme.colors.darkGray};
  width: 100%;
  height: ${theme.sizes.sizeFactorOf(5)}px;
  display: grid;
  position: relative;
  padding-left: ${theme.sizes.x + theme.sizes.xxl}px;
  box-sizing: border-box;
  margin-bottom: 2px;
`;
export const StyledTextInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: ${theme.sizes.x}px;
  & ::placeholder {
    color: ${theme.colors.lightPrimary};
    opacity: 1; /* Firefox */
  }
  &:focus {
    outline: none;
  }
`;
export const StyledIcon = styled.i`
  position: absolute;
  top: 35%;
  left: ${theme.sizes.md}px;
  width: ${theme.sizes.xxl}px;
  height: ${theme.sizes.xxl}px;
  opacity: 0.5;
`;
