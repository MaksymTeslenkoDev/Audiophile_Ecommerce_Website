import { BackButton } from "shared/BackButton";
import { Container } from "react-bootstrap";
import { useGetProduct } from "../hooks/useGetProductItem";
import { FeaturesProductOverview } from "./FeaturesProductOverview";
import { GaleryProductOverview } from "./GaleryProductOverview";
import { HeaderProductOverview } from "./HeaderProductOverview";
import { SimilarsProductOverview } from "./SimilarsProductOverview";
import "./styles/product.overview.scss";

export function ProductOverview(): JSX.Element {
	const product = useGetProduct();
	if (product) {
		return (
			<section className="product-overview-section">
				<Container fluid="md">
					<BackButton />
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
