import { NavBar } from "shared/NavBar";
import { Container } from "react-bootstrap";
import "./styles/product.header.styles.scss";

export function ProductHeader(): JSX.Element {
	return (
		<div className="product__header">
			<Container fluid="md">
				<NavBar />
			</Container>
		</div>
	);
}
