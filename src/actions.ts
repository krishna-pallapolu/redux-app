export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; // Define new action type

export interface Product {  // Export the Product interface
  id: number;
  name: string;
  price: number;
}


interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}
interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: Product;
}
  

export type CartActionTypes = AddToCartAction | RemoveFromCartAction; // Include new action type

export function addToCart(product: Product): CartActionTypes {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}
export function removeFromCart(product: Product): CartActionTypes {
    return {
      type: REMOVE_FROM_CART,
      payload: product,
    };
  }
