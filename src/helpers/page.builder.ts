import { OffsetPaging } from '../interfaces';

type Pager<DTO> = (dtos: DTO[]) => DTO[];
export class PageBuilder {
  static build<DTO>(paging: OffsetPaging): Pager<DTO> {
    return (dtos: DTO[]): DTO[] => {
      const { limit = dtos.length, offset = 0 } = paging;
      return dtos.slice(offset, limit + offset);
    };
  }
}