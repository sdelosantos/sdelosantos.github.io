//https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination

import { useCallback, useMemo } from 'react';

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
  onPageChange: (pageIndex: number) => void;
};

export const PaginationTable = ({
  count,
  pageSize,
  onPageChange,
  currentPageIndex,
}: PaginationProps) => {
  const totalPages = useMemo(
    () => Math.ceil(count / pageSize),
    [pageSize, count]
  );

  const renderPages = useCallback(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          style={{
            textAlign: 'center',
            width: 20,
            height: 20,
            color: i === currentPageIndex + 1 ? 'blue' : 'black',
            cursor: 'pointer',
          }}
          onClick={() => onPageChange(i - 1)}
        >
          {i}
        </span>
      );
    }
    return pages;
  }, [currentPageIndex, onPageChange, totalPages]);

  return (
    <div style={{ display: 'flex', gap: '20' }}>
      <span>Next</span>
      {renderPages()}
      <span>Preview</span>
    </div>
  );
};
