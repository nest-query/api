import { SortDirection } from "./sort-field.interface";


export type Paging = OffsetPaging | CursorPaging;
/**
 * Interface for paging a collection.
 */
export interface OffsetPaging {
  /**
   * The maximum number of items that should be in the collection.
   */
  limit?: number;
  /**
   * When paging through a collection, the offset represents the index to start at.
   */
  offset?: number;
}

export interface CursorPaging {
  after?: string;
  before?: string;
  limit?: number;
  order?: SortDirection | 'ASC' | 'DESC';
}

export interface CursorPageInfo {
  hasNext?: boolean;
  hasPrevious?: boolean;
  nextCursor: string | null;
  previousCursor: string | null;
}

export interface CursorResult<T> {
  pageInfo: CursorPageInfo;
  data: T[];
}