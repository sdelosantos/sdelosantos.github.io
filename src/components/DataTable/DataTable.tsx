/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { quickSort } from '../../core/utils/array';
import { SortOrientation } from '../../core/constants/types';
import { DataColumnProps } from './DataTable.util';

import {
  StyledBodyColumn,
  StyledHeaderColumn,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
} from './DataTable.style';

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

  useEffect(() => {
    console.log('data', data);
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
        {currentData.map((row, rowIndex) => (
          <StyledTableRow key={rowIndex} onClick={() => onRowClick?.(row)}>
            {columns.map((column, colIndex) => (
              <StyledBodyColumn key={colIndex}>
                {renderDataTableRow(column, row)}
              </StyledBodyColumn>
            ))}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DataTable;
