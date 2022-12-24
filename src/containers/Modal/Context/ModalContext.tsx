import React from "react";

export type ModalState = {
	isOpen: boolean;
};
export type ModalContextProps = {
	modalState: ModalState;
	switchModal: () => void;
};

export const ModalContext = React.createContext<ModalContextProps>(
	{} as ModalContextProps,
);
