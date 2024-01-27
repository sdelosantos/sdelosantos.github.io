import React from 'react';
import { StyledBoxContainer } from './BoxContainer.style';

type BoxContainerProps = {
  children: React.ReactNode;
};
export default function BoxContainer({ children }: BoxContainerProps) {
  return <StyledBoxContainer>{children}</StyledBoxContainer>;
}
