import React from 'react';
import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import { HEADER_HEIGH } from '../theme/theme';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  padding-top: ${HEADER_HEIGH}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledWrapper>
      <NavigationHeader />
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}
