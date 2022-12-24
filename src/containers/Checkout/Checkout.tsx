import { Container } from "react-bootstrap";
import { BackButton } from "shared/BackButton";
import { NavBar } from "shared/NavBar";
import { FormSummaryWrapper } from "./CheckoutFormSummaryWrapper";
import { ModalProvider } from "../Modal/Context/ModalProvider";
import { ModalDialog } from "../Modal/modal";
import "./styles/checkout.scss";
import { ThankYouModal } from "./ThankYouModal/ThankYouModal";

export function Checkout() {
	return (
		<ModalProvider>
			<section className="checkout-section">
				<div className="checkout-section__header">
					<Container fluid="md">
						<NavBar />
					</Container>
				</div>
				<Container fluid="md" className="checkout-section__container">
					<BackButton />
					<FormSummaryWrapper />
				</Container>
			</section>
			<ModalDialog>
				<ThankYouModal />
			</ModalDialog>
		</ModalProvider>
	);
}
