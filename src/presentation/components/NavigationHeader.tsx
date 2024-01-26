import React from 'react';
import logo from '../../assets/star_war_logo.svg';
import styled from 'styled-components';
import { HEADER_HEIGH } from '../theme/theme';

const StyledHeaderContainer = styled.nav`
  display: flex;
  position: fixed;
  inset: top;
  justify-content: space-between;
  width: 100vw;
  height: ${HEADER_HEIGH}px;
`;
const StyledLogo = styled.div`
  width: fit-content;
  height: 100%;

  & img {
    width: auto;
    height: ${HEADER_HEIGH}px;
  }
`;

function NavigationHeader() {
  return (
    <StyledHeaderContainer>
      <StyledLogo>
        <img src={logo} />
      </StyledLogo>
    </StyledHeaderContainer>
  );
}

export default React.memo(NavigationHeader);
