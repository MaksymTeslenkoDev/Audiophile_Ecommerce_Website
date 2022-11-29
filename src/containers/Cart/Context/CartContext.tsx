import React from "react";

export type CartProductItem = {
	productId: string;
	price: number;
	amount: number;
};
export type CartState = {
	products: Array<CartProductItem>;
};
export type CartContextProps = {
	cartState: CartState;
	addProduct: (product: CartProductItem) => void;
	deleteProduct: (id: string) => void;
	clearAll: () => void;
	getCartProductAmount: (id: string) => number;
};

export const CartContext = React.createContext<CartContextProps>(
	{} as CartContextProps,
);
