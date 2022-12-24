import React from "react";
import { SWITCH_MODAL } from "./ActionTypes";
import { ModalContext } from "./ModalContext";
import { ModalReducer } from "./ModalReducer";

function ModalProvider({ children }: { children: React.ReactNode }) {
	const [modalState, dispatch] = React.useReducer(ModalReducer, {
		isOpen: false,
	});

	const switchModal = () => {
		dispatch({ type: SWITCH_MODAL });
	};

	const value = {
		modalState,
		switchModal,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}

function useModalContext() {
	const context = React.useContext(ModalContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a ModalProvider");
	}
	return context;
}

export { ModalProvider, useModalContext };
