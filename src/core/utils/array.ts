import { SortOrientation } from '../constants/types';

export function quickSort<TArray>(
  data: Array<TArray>,
  sortBy: keyof TArray,
  orientation: SortOrientation
): Array<TArray> {
  if (data?.length <= 1) return data;

  const pivot = data[0]?.[sortBy] as never;
  const sortCompare =
    orientation === 'asc'
      ? (a: never, b: never) => a < b
      : (a: never, b: never) => a > b;

  const min = data
    .slice(1)
    .filter((item) => sortCompare(item[sortBy] as never, pivot));
  const max = data
    .slice(1)
    .filter((item) => !sortCompare(item[sortBy] as never, pivot));

  return [
    ...quickSort(min, sortBy, orientation),
    data[0],
    ...quickSort(max, sortBy, orientation),
  ];
}

export function filterArray<TArray>(
  data: Array<TArray>,
  props: Array<keyof TArray>,
  search: string
) {
  if (!search.trim()) {
    return data;
  }

  const lowerCaseSearch = search.toLowerCase();
  return data.filter((item) =>
    props.some((prop) => {
      const propValue = String(item[prop]).toLowerCase();
      return propValue.includes(lowerCaseSearch);
    })
  );
}
