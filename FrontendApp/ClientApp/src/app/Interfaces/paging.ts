import { InterfaceProduct } from './product';

export interface InterfacePaging {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: InterfaceProduct[];
}
