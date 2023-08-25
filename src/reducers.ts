import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from './actions';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
  switch (action.type) {
    case ADD_TO_CART:
      const existingCartItem = state.items.find(item => item.product.id === action.payload.id);

      if (existingCartItem) {
        return {
          ...state,
          items: state.items.map(item => 
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== action.payload.id),
        };
  
    default:
      return state;
  }
}
