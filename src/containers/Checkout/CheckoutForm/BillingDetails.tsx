import { Col, Row } from "react-bootstrap";
import { AppFormInput } from "shared/Input/AppInput/AppFormInput";

export function BillingDetails(): JSX.Element {
	return (
		<div className="checkout-form-container__form-section">
			<p className="form-section__title">Billing Details</p>
			<Row>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="name"
						label="Name"
						id="name"
						placeholder="Alexei Ward"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="email"
						label="Email"
						id="email"
						placeholder="alexeiward@mail.com"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="phone"
						label="Phone Number"
						id="phone"
						placeholder="+1 202-555-0136"
					/>
				</Col>
			</Row>
		</div>
	);
}
