import { Col, Row } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { CheckoutForm } from "./CheckoutForm/CheckoutForm";
import { CheckoutSummary } from "./Summary/CheckoutSummary";
import { useCheckoutForm } from "./hooks/useCheckoutForm";

export function FormSummaryWrapper(): JSX.Element {
	const { methods, handleSubmit, handleChangePayment, payment } =
		useCheckoutForm();
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit}>
				<Row className="checkout-section__container__content-wrapper">
					<Col lg="8">
						<CheckoutForm
							handleChangePayment={handleChangePayment}
							payment={payment}
						/>
					</Col>
					<Col lg="4">
						<CheckoutSummary />
					</Col>
				</Row>
			</form>
		</FormProvider>
	);
}
