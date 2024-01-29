/* eslint-disable @typescript-eslint/no-explicit-any */
import { quickSort } from './array';

describe('Array', () => {
  describe('quickSort', () => {
    it('should sort an array of objects in ascending order based on a specified key', () => {
      const data = [
        { id: 3, name: 'John' },
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const expected = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'John' },
      ];
      const result = quickSort(data, 'id', 'asc');
      expect(result).toEqual(expected);
    });

    it('should sort an array of objects in descending order based on a specified key', () => {
      const data = [
        { id: 3, name: 'John' },
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      const expected = [
        { id: 3, name: 'John' },
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' },
      ];
      const result = quickSort(data, 'id', 'desc');
      expect(result).toEqual(expected);
    });

    it('should correctly sort an array with repeated values', () => {
      const data = [
        { id: 3, name: 'John' },
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'David' },
        { id: 2, name: 'Charlie' },
      ];
      const expected = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 2, name: 'Charlie' },
        { id: 3, name: 'John' },
        { id: 3, name: 'David' },
      ];
      const result = quickSort(data, 'id', 'asc');
      expect(result).toEqual(expected);
    });

    it('should correctly sort an empty array', () => {
      const data: any = [];
      const expected: any[] = [];
      const result = quickSort(data, 'id', 'asc');
      expect(result).toEqual(expected);
    });

    it('should correctly sort an array with all elements equal', () => {
      const data = [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Bob' },
        { id: 1, name: 'John' },
      ];
      const expected = [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Bob' },
        { id: 1, name: 'John' },
      ];
      const result = quickSort(data, 'id', 'asc');
      expect(result).toEqual(expected);
    });
  });
});
