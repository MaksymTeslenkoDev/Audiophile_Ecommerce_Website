import { SWITCH_MODAL } from "./ActionTypes";
import { ModalState } from "./ModalContext";

export type Action = { type: typeof SWITCH_MODAL };
export function ModalReducer(state: ModalState, action: Action): ModalState {
	switch (action.type) {
		case SWITCH_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
			};
		default:
			return state;
	}
}
