import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const StyledTitle = styled.h1`
  width: 100%;
  font-size: ${theme.sizes.sizeFactorOf(3)}px;
  font-weight: bold;
  margin: 0;
  margin-bottom: ${theme.sizes.xxl}px;
  text-transform: capitalize;
`;
