import React from "react";
import {
	ADD_PRODUCT,
	DELETE_ALL_PRODUCTS,
	DELETE_PRODUCT,
} from "./ActionTypes";
import { CartContext, CartProductItem } from "./CartContext";
import { CartReducer } from "./CartReducer";

function CartProvider({ children }: { children: React.ReactNode }) {
	const persistedState = sessionStorage.getItem("CartProducts");
	const [cartState, dispatch] = React.useReducer(CartReducer, {
		products: (persistedState && JSON.parse(persistedState)) || [],
	});

	React.useEffect(() => {
		sessionStorage.setItem("CartProducts", JSON.stringify(cartState.products));
	}, [cartState.products]);

	const addProduct = (product: CartProductItem) => {
		dispatch({ type: ADD_PRODUCT, payload: { product } });
	};
	const deleteProduct = (id: string) => {
		dispatch({ type: DELETE_PRODUCT, payload: { productId: id } });
	};
	const clearAll = () => {
		dispatch({ type: DELETE_ALL_PRODUCTS });
	};
	const getCartProductAmount = (id: string) => {
		const product = cartState.products.find((item) => item.productId === id);
		return (product && product.amount) || 1;
	};
	return (
		<CartContext.Provider
			value={{
				cartState,
				addProduct,
				deleteProduct,
				clearAll,
				getCartProductAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

function useCartContext() {
	const context = React.useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}

export { CartProvider, useCartContext };
