export interface Pageable {
    sort: Sortable;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  }
  export interface Sortable {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }
  export type PagedResponse<T> = {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    sort: {
      sorted: false;
      unsorted: true;
      empty: true;
    };
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
    first: boolean;
    last: boolean;
  };
  
  export type Options ={
    value: string;
    label: string;
  }