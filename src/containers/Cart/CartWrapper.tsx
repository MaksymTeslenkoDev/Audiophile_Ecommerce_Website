import React from "react";
import Icon from "assets/shared/desktop/icon-cart.svg";
import { CartModalWrapper } from "./CartModal/CartModalWrapper";

export function Cart(): JSX.Element {
	const [isOpen, setOpen] = React.useState(false);
	return (
		<div>
			<Icon width="1.5rem" height="1.5rem" onClick={() => setOpen(true)} />
			<CartModalWrapper isOpen={isOpen} closeModal={() => setOpen(false)} />
		</div>
	);
}
