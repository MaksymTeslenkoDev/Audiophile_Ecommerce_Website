import { WithChildren } from "@shared/types";
import { Modal } from "react-bootstrap";
import { useModalContext } from "./Context/ModalProvider";

export function ModalDialog({ children }: WithChildren): JSX.Element {
	const { modalState, switchModal } = useModalContext();
	return (
		<Modal show={modalState.isOpen} onHide={switchModal} className="modal">
			{children}
		</Modal>
	);
}
