import { PaymentMethod } from "../hooks/useCheckoutForm";
import { BillingDetails } from "./BillingDetails";
import { PaymentDetails } from "./PaymentDetails";
import { ShippingInfo } from "./ShippingInfo";

interface CheckoutFormProps {
	handleChangePayment: (value: string) => void;
	payment: PaymentMethod;
}
export function CheckoutForm({
	handleChangePayment,
	payment,
}: CheckoutFormProps): JSX.Element {
	return (
		<div className="checkout-form-container">
			<p className="checkout-form-container__title">Checkout</p>
			<BillingDetails />
			<ShippingInfo />
			<PaymentDetails
				handleChangePayment={handleChangePayment}
				payment={payment}
			/>
		</div>
	);
}
