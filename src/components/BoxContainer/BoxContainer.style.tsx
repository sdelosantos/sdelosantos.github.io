import styled from 'styled-components';
import { theme } from '../../presentation/theme/theme';

export const StyledBoxContainer = styled.section`
  width: fit-content;
  height: fit-content;
  min-width: 50vw;
  position: relative;
  background-color: ${theme.colors.secondaryColor};
  border-radius: 5px;
  overflow: auto;
  padding: 1px;
  box-sizing: border-box;
  padding: 20px;
`;
