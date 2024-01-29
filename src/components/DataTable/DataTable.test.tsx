import { fireEvent, render, screen } from '@testing-library/react';
import DataTable, { ColumnName } from './DataTable';

describe('DataTable', () => {
  it('should render a table with headers and rows', () => {
    // Arrange
    const data = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ];
    const columns = [
      <ColumnName name='id' label='ID' />,
      <ColumnName name='name' label='Name' />,
      <ColumnName name='age' label='Age' />,
    ];
    // Act
    render(<DataTable data={data}>{columns}</DataTable>);

    // Assert
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  it('should sort the data in ascending and descending order when a column header is clicked', () => {
    // Arrange
    const data = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ];
    const columns = [
      <ColumnName name='id' label='ID' />,
      <ColumnName name='name' label='Name' />,
      <ColumnName name='age' label='Age' />,
    ];

    // Act
    render(<DataTable data={data}>{columns}</DataTable>);

    // Assert
    const idHeader = screen.getByText('ID');
    const nameHeader = screen.getByText('Name');
    const ageHeader = screen.getByText('Age');

    fireEvent.click(idHeader);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(idHeader);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    fireEvent.click(nameHeader);
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();

    fireEvent.click(nameHeader);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();

    fireEvent.click(ageHeader);
    expect(screen.getByText('25')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();

    fireEvent.click(ageHeader);
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('should display a sort icon indicating the current sort direction of the clicked column header', () => {
    // Arrange
    const data = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ];
    const columns = [
      <ColumnName name='id' label='ID' />,
      <ColumnName name='name' label='Name' />,
      <ColumnName name='age' label='Age' />,
    ];
    // Act
    render(<DataTable data={data}>{columns}</DataTable>);

    // Assert
    const idHeader = screen.getByText('ID');
    const nameHeader = screen.getByText('Name');
    const ageHeader = screen.getByText('Age');

    fireEvent.click(idHeader);
    expect(screen.getByTestId('sort-icon-id')).toHaveClass('fa-sort-up');

    fireEvent.click(idHeader);
    expect(screen.getByTestId('sort-icon-id')).toHaveClass('fa-sort-down');

    fireEvent.click(nameHeader);
    expect(screen.getByTestId('sort-icon-name')).toHaveClass('fa-sort-up');

    fireEvent.click(nameHeader);
    expect(screen.getByTestId('sort-icon-name')).toHaveClass('fa-sort-down');

    fireEvent.click(ageHeader);
    expect(screen.getByTestId('sort-icon-age')).toHaveClass('fa-sort-up');

    fireEvent.click(ageHeader);
    expect(screen.getByTestId('sort-icon-age')).toHaveClass('fa-sort-down');
  });

  it('should render an empty table when the data array is empty', () => {
    // Arrange
    const data: unknown[] = [];
    const columns = [
      <ColumnName name='id' label='ID' />,
      <ColumnName name='name' label='Name' />,
      <ColumnName name='age' label='Age' />,
    ];

    // Act
    render(<DataTable data={data}>{columns}</DataTable>);

    // Assert
    expect(screen.queryByText('ID')).not.toBeInTheDocument();
    expect(screen.queryByText('Name')).not.toBeInTheDocument();
    expect(screen.queryByText('Age')).not.toBeInTheDocument();
  });
});
