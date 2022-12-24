import { AppFormInput } from "shared/Input/AppInput/AppFormInput";
import { Col, Row } from "react-bootstrap";
import { RadioButtonsGroup } from "shared/Button/Radio/RadioButtonsGroup";
import IconCashDelivery from "assets/checkout/icon-cash-on-delivery.svg";
import { PaymentMethod } from "../hooks/useCheckoutForm";

interface PaymentDetailsProps {
	payment: PaymentMethod;
	handleChangePayment: (value: string) => void;
}
const RadioOptions = [
	{ label: "e-Money", value: PaymentMethod.EMoney },
	{ label: "Cash Delivery", value: PaymentMethod.CashDelivery },
];
export function PaymentDetails({
	payment,
	handleChangePayment,
}: PaymentDetailsProps): JSX.Element {
	const renderEMoneyFields = () => {
		return (
			<Row>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="eMoneyNumber"
						label="e-Money Number"
						id="eMoneyNumber"
						placeholder="238521993"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="eMoneyPin"
						label="e-Money PIN"
						id="eMoneyPin"
						placeholder="6891"
					/>
				</Col>
			</Row>
		);
	};

	const renderCashDeliveryInfo = () => {
		return (
			<div className="cash-delivery-info">
				<div>
					<IconCashDelivery width="3rem" height="3rem" />
				</div>
				<p>
					The ‘Cash on Delivery’ option enables you to pay in cash when our
					delivery courier arrives at your residence. Just make sure your
					address is correct so that your order will not be cancelled.
				</p>
			</div>
		);
	};
	return (
		<div className="checkout-form-container__form-section">
			<p className="form-section__title">Shipping Info</p>
			<Row className="form-section__payment-details">
				<Col xs="12" md="6">
					<p className="payment-details-title">Payment methods</p>
				</Col>
				<Col xs="12" md="6">
					<RadioButtonsGroup
						items={RadioOptions}
						onChange={handleChangePayment}
						checked={payment}
					/>
				</Col>
			</Row>
			{payment == PaymentMethod.EMoney && renderEMoneyFields()}
			{payment == PaymentMethod.CashDelivery && renderCashDeliveryInfo()}
		</div>
	);
}
