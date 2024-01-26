import React from 'react';
import {
  StyledScreenWrapper,
  StyledScreenTitle,
  StyledScreenTitleBar,
  StyledScreenContainers,
} from './ScreenContainer.style';

type ScreenContainerProps = {
  title: string;
  children: React.ReactNode;
};
export default function ScreenContainer({
  title,
  children,
}: ScreenContainerProps) {
  return (
    <StyledScreenWrapper>
      <StyledScreenTitleBar>
        <StyledScreenTitle>{title}</StyledScreenTitle>
      </StyledScreenTitleBar>
      <StyledScreenContainers>{children}</StyledScreenContainers>
    </StyledScreenWrapper>
  );
}
