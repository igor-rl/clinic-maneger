interface PaginatedResult<T> {
  total: number;
  results: T[];
  page: number;
  lastPage: number;
}
