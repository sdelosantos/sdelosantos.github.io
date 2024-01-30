import React, { useCallback, useEffect, useState } from 'react';
import {
  StyledTab,
  StyledTabWrapper,
  StyledTabsBodyContainer,
  StyledTabsBox,
  StyledTabsContainer,
} from './TabsBox.style';

type TabsProps = {
  name: string;
  label: string;
  icon?: string;
  children: React.ReactElement;
};
type TabsBoxProx = {
  onTabChange?: (tabName: string) => void;
  selectedTabIndex?: number;
  children: React.ReactElement<TabsProps> | React.ReactElement<TabsProps>[];
};

export const Tabs = ({ name, icon, label }: TabsProps) => {
  return (
    <StyledTab key={`tab_${name}`} id={`tab_${name}`}>
      {icon && <i className={icon}></i>}
      <span>{label}</span>
    </StyledTab>
  );
};

export default function TabsBox({
  children,
  onTabChange,
  selectedTabIndex,
}: TabsBoxProx) {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(
    selectedTabIndex ?? 0
  );
  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabsProps>[];

  const handleTabClick = useCallback(
    (tab: TabsProps, index: number) => {
      onTabChange?.(tab.name);
      setCurrentSelectedTab(index);
    },
    [onTabChange]
  );

  useEffect(() => {
    setCurrentSelectedTab(selectedTabIndex ?? 0);
  }, [selectedTabIndex]);

  return (
    <StyledTabsBox role='tabpanel'>
      <StyledTabsContainer>
        {tabs.map((tab, inx) => (
          <StyledTabWrapper
            isActive={inx === currentSelectedTab}
            role='tab'
            key={inx}
            onClick={() => handleTabClick(tab.props, inx)}
          >
            {tab}
          </StyledTabWrapper>
        ))}
      </StyledTabsContainer>
      <StyledTabsBodyContainer>
        {tabs[currentSelectedTab].props.children}
      </StyledTabsBodyContainer>
    </StyledTabsBox>
  );
}
