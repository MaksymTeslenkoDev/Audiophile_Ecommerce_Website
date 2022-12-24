import { AppFormInput } from "shared/Input/AppInput/AppFormInput";
import { Col, Row } from "react-bootstrap";

export function ShippingInfo(): JSX.Element {
	return (
		<div className="checkout-form-container__form-section">
			<p className="form-section__title">Shipping Info</p>
			<Row>
				<Col xs="12" className="form-section__text-field">
					<AppFormInput
						name="address"
						label="YourAdress"
						id="address"
						placeholder="1137 Williams Avenue"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="zip"
						label="ZIP Code"
						id="zip"
						placeholder="10001"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="city"
						label="City"
						id="city"
						placeholder="New York"
					/>
				</Col>
				<Col xs="12" md="6" className="form-section__text-field">
					<AppFormInput
						name="country"
						label="Country"
						id="country"
						placeholder="United States"
					/>
				</Col>
			</Row>
		</div>
	);
}
