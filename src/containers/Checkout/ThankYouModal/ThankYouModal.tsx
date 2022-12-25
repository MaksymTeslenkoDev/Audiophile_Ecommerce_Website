import { Button } from "shared/Button";
import { useNavigate } from "react-router-dom";
import CONFIRMATION_ICON from "assets/checkout/icon-order-confirmation.svg";
import { Container } from "react-bootstrap";
import { SummaryRow } from "./ThankYouSummaryRow";
import "../styles/thank.you.modal.scss";

export function ThankYouModal(): JSX.Element {
	const navigate = useNavigate();

	return (
		<Container fluid className="thank-you">
			<p className="thank-you__content-row">
				<CONFIRMATION_ICON width="4rem" height="4rem" />
			</p>
			<div className="thank-you__title thank-you__content-row">
				<p>Thank you</p>
				<p>for your order</p>
			</div>
			<p className="thank-you__sub-title thank-you__content-row">
				You will receive an email confirmation shortly.
			</p>
			<SummaryRow />
			<Button onClick={() => navigate("/")}>Back to home</Button>
		</Container>
	);
}
