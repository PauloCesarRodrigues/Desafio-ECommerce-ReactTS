import { createContext, Dispatch, SetStateAction } from "react";

export interface Coffee {
  name: string;
  value: number;
  description: string;
  tags: string[];
  image: string;
}

export interface CoffeeWithQuantity extends Coffee {
  quantity?: number;
}

interface OrderContextType {
  activeOrder: CoffeeWithQuantity[];
  setActiveOrder: Dispatch<SetStateAction<CoffeeWithQuantity[]>>;
}

export const OrderContext = createContext<OrderContextType>({
  activeOrder: [],
  setActiveOrder: () => {}
});