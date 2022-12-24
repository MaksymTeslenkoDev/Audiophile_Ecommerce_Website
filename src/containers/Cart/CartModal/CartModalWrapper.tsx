import { Button } from "shared/Button";
import { getTotalCartPrice } from "helpers/getTotalCartPrice";
import { getTransformedPrice } from "helpers/getTransformedPrice";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { CartSummaryItem } from "shared/CartProductItem";
import { useCartContext } from "../Context/CartProvider";
import "./cart.modal.scss";

interface Props {
	isOpen: boolean;
	closeModal: () => void;
}
export function CartModalWrapper({ isOpen, closeModal }: Props): JSX.Element {
	const { cartState, clearAll } = useCartContext();
	const navigate = useNavigate();
	const renderCartItems = () => {
		if (cartState.products.length > 0) {
			return (
				<div className="cart-modal__items-wrapper">
					{cartState.products.map((item) => (
						<CartSummaryItem
							isAmountInput
							key={item.productId}
							product={item}
						/>
					))}
				</div>
			);
		}
	};
	return (
		<Modal show={isOpen} onHide={closeModal} className="cart-modal">
			<div className="cart-modal__header">
				<p className="cart-modal__header__title">
					Cart ({cartState.products.length})
				</p>
				<span
					className="cart-modal__header__clear-btn"
					onClick={() => clearAll()}
				>
					Remove all
				</span>
			</div>
			{renderCartItems()}
			<div className="cart-modal__footer">
				<p className="cart-modal__footer__title">Total</p>
				<span className="cart-modal__footer__total-price">
					{getTransformedPrice(getTotalCartPrice(cartState.products))}
				</span>
			</div>
			<Button onClick={() => navigate("/checkout")}>Checkout</Button>
		</Modal>
	);
}
