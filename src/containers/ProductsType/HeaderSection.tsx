import { Container } from "react-bootstrap";
import { NavBar } from "shared/NavBar";
import "./styles/product.type.header.scss";

interface Props {
	productType: string;
}
export function ProductTypeHeaderSection({ productType }: Props): JSX.Element {
	return (
		<div className="product-type__header">
			<Container fluid="md">
				<NavBar />
				<div className="header__content-wrapper">
					<h2>{productType}</h2>
				</div>
			</Container>
		</div>
	);
}
