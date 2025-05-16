export const alphabeticalSortHandler = <T>(key: keyof T) => {
  return (a: T, b: T) => {
    const aValue = a[key] as unknown as string;
    const bValue = b[key] as unknown as string;

    return aValue.localeCompare(bValue);
  };
};
