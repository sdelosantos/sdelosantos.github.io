import styled, { keyframes } from 'styled-components';
import { theme } from '../../presentation/theme/theme';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const StyledSpinner = styled.i`
  font-size: ${theme.sizes.xl}px;
  animation: ${spinAnimation} 1s linear infinite;
`;
export const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;
export const StyledMessage = styled.h2`
  font-size: ${theme.sizes.xl}px;
`;
export const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
