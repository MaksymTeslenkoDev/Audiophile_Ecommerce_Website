import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGetProduct } from "../hooks/useGetProductItem";
import { FeaturesProductOverview } from "./FeaturesProductOverview";
import { GaleryProductOverview } from "./GaleryProductOverview";
import { HeaderProductOverview } from "./HeaderProductOverview";
import { SimilarsProductOverview } from "./SimilarsProductOverview";
import "./styles/product.overview.scss";

export function ProductOverview(): JSX.Element {
	const product = useGetProduct();
	const navigate = useNavigate();
	if (product) {
		return (
			<section className="product-overview-section">
				<Container fluid="md">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="back-button"
					>
						Go Back
					</button>
					<HeaderProductOverview product={product} />
					<FeaturesProductOverview product={product} />
					<GaleryProductOverview product={product} />
					<SimilarsProductOverview product={product} />
				</Container>
			</section>
		);
	}
	return <div />;
}
