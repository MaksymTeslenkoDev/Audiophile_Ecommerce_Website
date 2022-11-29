import {
	ADD_PRODUCT,
	DELETE_ALL_PRODUCTS,
	DELETE_PRODUCT,
} from "./ActionTypes";
import { CartProductItem, CartState } from "./CartContext";

type Action =
	| { type: typeof ADD_PRODUCT; payload: { product: CartProductItem } }
	| { type: typeof DELETE_PRODUCT; payload: { productId: string } }
	| { type: typeof DELETE_ALL_PRODUCTS };

export function CartReducer(state: CartState, action: Action): CartState {
	switch (action.type) {
		case ADD_PRODUCT:
			const productIndex = state.products.findIndex(
				(item) => item.productId === action.payload.product.productId,
			);

			return {
				...state,
				products:
					productIndex > -1
						? [
								...state.products.slice(0, productIndex),
								{
									...action.payload.product,
								},
								...state.products.slice(productIndex + 1),
						  ]
						: [...state.products, { ...action.payload.product }],
			};
		case DELETE_PRODUCT:
			return {
				products: state.products.filter(
					(item) => item.productId !== action.payload.productId,
				),
			};
		case DELETE_ALL_PRODUCTS:
			return {
				products: [],
			};
		default:
			return state;
	}
}
