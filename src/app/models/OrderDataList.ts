import { OrderDTO } from "./OrderDTO.model";

export interface OrderDataList {
    orders: OrderDTO[];
    totalRows: number;
 }