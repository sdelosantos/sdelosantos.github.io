/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { quickSort } from '../../core/utils/array';
import { SortOrientation } from '../../core/constants/types';
import { DataColumnProps } from './DataTable.util';

import {
  StyledBodyColumn,
  StyledHeaderColumn,
  StyledNotFoundMessage,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
} from './DataTable.style';
import useKeyPressArrow from '../../core/hooks/useKeyPressArrow';

type DataTableProps<TData> = {
  children: React.ReactNode;
  data: Array<TData>;
  onRowClick?: (rowData: TData) => void;
};

export const ColumnName: React.FC<DataColumnProps> = () => null;

function DataTable<TData>({
  children,
  data,
  onRowClick,
}: DataTableProps<TData>) {
  const columns = React.Children.toArray(
    children
  ) as React.ReactElement<DataColumnProps>[];

  const [rowIndexActived, setRowIndexActived] = useState<number | null>(null);
  const [currentData, setCurrentData] = useState<Array<any>>(data);
  const [currrentSort, setCurrentSort] = useState<{
    column: string;
    sort: SortOrientation | null;
  }>({
    column: '',
    sort: null,
  });

  const handleDataSorting = useCallback(
    (sort: SortOrientation | null, columnName: string) => {
      const sortDirection = !sort ? 'asc' : sort == 'asc' ? 'desc' : null;
      if (sortDirection) {
        const result = quickSort(
          [...data],
          columnName as keyof TData,
          sortDirection
        );
        setCurrentData(result);
      } else {
        setCurrentData([...data]);
      }
      setCurrentSort({
        sort: sortDirection,
        column: columnName,
      });
      setRowIndexActived(null);
    },
    [data]
  );

  const renderDataTableRow = useCallback(
    (
      column: React.ReactElement<DataColumnProps>,
      data: { [k: string]: string | number }
    ) => {
      if (column.props.format)
        return column.props.format(data[column.props.name] as string);
      if (column.props.customComponent)
        return column.props.customComponent(data);

      return data[column.props.name];
    },
    []
  );

  const getSortIcon = useCallback(
    (columnName: string) => {
      if (currrentSort.column === columnName && currrentSort.sort) {
        return currrentSort.sort === 'asc' ? (
          <i className='icon fa-solid fa-sort-up'></i>
        ) : (
          <i className='icon fa-solid fa-sort-down'></i>
        );
      }
      return <i className='icon fa-solid fa-sort'></i>;
    },
    [currrentSort.column, currrentSort.sort]
  );

  useKeyPressArrow((key) => {
    switch (key) {
      case 'KeyDown':
        if (rowIndexActived != null && rowIndexActived < currentData.length - 1)
          setRowIndexActived(rowIndexActived + 1);
        else setRowIndexActived(0);
        break;
      case 'KeyUp':
        if (rowIndexActived != null && rowIndexActived > 0)
          setRowIndexActived(rowIndexActived - 1);
        else setRowIndexActived(0);
        break;
      case 'Enter':
        if (rowIndexActived !== null) {
          onRowClick?.(currentData[rowIndexActived]);
        }
        break;
    }
  });

  useEffect(() => {
    setRowIndexActived(null);
    setCurrentData(data);
  }, [data]);

  return (
    <StyledTable>
      <StyledTableHeader>
        <StyledTableRow>
          {columns.map((column, index) => (
            <StyledHeaderColumn
              key={index}
              isActive={currrentSort.column === column.props.name}
              onClick={() =>
                handleDataSorting(currrentSort.sort, column.props.name)
              }
            >
              <div className='actions'>
                <label>{column.props.label}</label>
                {getSortIcon(column.props.name)}
              </div>
            </StyledHeaderColumn>
          ))}
        </StyledTableRow>
      </StyledTableHeader>
      <tbody>
        {currentData?.length > 0 ? (
          currentData.map((row, rowIndex) => (
            <StyledTableRow
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              isActived={rowIndexActived === rowIndex}
            >
              {columns.map((column, colIndex) => (
                <StyledBodyColumn key={colIndex}>
                  {renderDataTableRow(column, row)}
                </StyledBodyColumn>
              ))}
            </StyledTableRow>
          ))
        ) : (
          <tr>
            <StyledNotFoundMessage colSpan={columns.length}>
              <span>No data found</span>
            </StyledNotFoundMessage>
          </tr>
        )}
      </tbody>
    </StyledTable>
  );
}

export default DataTable;
