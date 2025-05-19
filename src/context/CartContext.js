import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [], // { id, title, price, quantity, image }
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const itemExists = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { cartItems: state.cartItems, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
