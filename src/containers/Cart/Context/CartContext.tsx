import React from "react";

export type CartProductItem = {
	productId: string;
	title: string;
	price: number;
	amount: number;
	thumbnail: string;
};
export type CartState = {
	products: Array<CartProductItem>;
};
export type CartContextProps = {
	cartState: CartState;
	addProduct: (product: CartProductItem) => void;
	deleteProduct: (id: string) => void;
	clearAll: () => void;
};

export const CartContext = React.createContext<CartContextProps>(
	{} as CartContextProps,
);
