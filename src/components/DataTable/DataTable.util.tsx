//https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination

import { memo, useCallback, useMemo } from 'react';
import { StyledPageTab, StyledPaginationContainer } from './DataTable.style';
import useKeyPressArrow from '../../core/hooks/useKeyPressArrow';

export type DataColumnProps = {
  name: string;
  label: string;
  format?: (value: string) => string;
  customComponent?: (data: {
    [k: string]: string | number | unknown;
  }) => React.ReactNode;
};

export type PaginationProps = {
  count: number;
  pageSize: number;
  currentPageIndex: number;
  onPageChange?: (pageIndex: number) => void;
};

export const TablePagination = memo(
  ({
    count,
    pageSize,
    onPageChange,
    currentPageIndex = 0,
  }: PaginationProps) => {
    const totalPages = useMemo(
      () => Math.ceil(count / pageSize),
      [pageSize, count]
    );

    const handleMovePage = useCallback(
      (move: 'next' | 'prev') => {
        if (onPageChange) {
          if (move === 'next') {
            if (currentPageIndex < totalPages - 1 && totalPages > 0) {
              onPageChange(currentPageIndex + 1);
            }
          } else {
            if (currentPageIndex > 0) {
              onPageChange(currentPageIndex + -1);
            }
          }
        }
      },
      [currentPageIndex, onPageChange, totalPages]
    );

    const renderPages = useCallback(() => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <StyledPageTab
            key={i}
            role='tab'
            isActive={i - 1 === currentPageIndex}
            onClick={() => onPageChange?.(i - 1)}
          >
            <span>{i}</span>
          </StyledPageTab>
        );
      }
      return pages;
    }, [currentPageIndex, onPageChange, totalPages]);

    useKeyPressArrow((key) => {
      switch (key) {
        case 'KeyLeft':
          handleMovePage('prev');
          break;
        case 'KeyRight':
          handleMovePage('next');
          break;
      }
    });

    if (count <= 0) return null;
    return (
      <StyledPaginationContainer role='tablist'>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => handleMovePage('prev')}
        >
          Preview
        </span>
        {renderPages()}
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => handleMovePage('next')}
        >
          Next
        </span>
      </StyledPaginationContainer>
    );
  }
);
