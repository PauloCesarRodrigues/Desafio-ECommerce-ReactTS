import { createContext, Dispatch, SetStateAction } from "react";

export interface Address {
  street: string;
  number: number;
  district: string;
  city: string;
  uf: string;
}

export interface OrderData extends Address {
  paymentMethod: string;
}

export interface OrderDataContextType {
  finishedOrder: OrderData | null;
  setFinishedOrder: Dispatch<SetStateAction<OrderData | null>>;
}
export const OrderDataContext = createContext<OrderDataContextType>({
  finishedOrder: null, 
  setFinishedOrder: () => {}, 
});