"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

export const cartContext = createContext<any | null>(null);

function reducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      return { cart: [...state.cart, { ...action.payload }] };
    case "remove":
      return {
        cart: [...state.cart.filter((c: any) => c.id !== action.payload.id)],
      };
    default:
      return state;
  }
}

function Context({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default Context;

export function CartState() {
  const data = useContext(cartContext);
  return data;
}
