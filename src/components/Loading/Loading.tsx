import React from 'react';
import {
  StyledLoadingContainer,
  StyledMessage,
  StyledMessageContainer,
  StyledSpinner,
} from './Loading.style';

export default function Loading({ message }: { message: string }) {
  return (
    <StyledLoadingContainer>
      <StyledMessageContainer>
        <StyledSpinner className='fa-solid fa-arrows-rotate'></StyledSpinner>
        <StyledMessage>{message}</StyledMessage>
      </StyledMessageContainer>
    </StyledLoadingContainer>
  );
}
