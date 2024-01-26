/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { quickSort } from '../../core/utils/array';
import { SortOrientation } from '../../core/constants/types';
import { DataColumnProps, PaginationTable } from './DataTable.util';

type DataTableProps = {
  children: React.ReactNode;
  data: Array<any>;
};

export const ColumnName: React.FC<DataColumnProps> = () => null;

const DataTable: React.FC<DataTableProps> = ({ children, data }) => {
  const columns = React.Children.toArray(
    children
  ) as React.ReactElement<DataColumnProps>[];

  const [currentData, setCurrentData] = useState<Array<any>>(data);
  const currrentSort = useRef<SortOrientation | null>(null);

  const handleDataSorting = useCallback(
    (sort: SortOrientation, columnName: string) => {
      currrentSort.current = sort == 'asc' ? 'desc' : 'asc';
      const result = quickSort([...data], columnName, sort);
      setCurrentData(result);
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

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  return (
    <div>
      <div>
        <div>
          <input type='text' placeholder='Type a name to search' />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>
                  <label>{column.props.label}</label>
                  <span
                    style={{ marginLeft: 2, cursor: 'pointer', color: 'blue' }}
                    onClick={() =>
                      handleDataSorting(
                        currrentSort.current ?? 'asc',
                        column.props.name
                      )
                    }
                  >
                    sort {currrentSort.current}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{renderDataTableRow(column, row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <PaginationTable
          count={60}
          currentPageIndex={0}
          pageSize={10}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default DataTable;
