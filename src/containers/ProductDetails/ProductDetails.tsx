import { BeforeFooterSection } from "shared/BeforeFooterBlock";
import { ProductCards } from "shared/ProductCards";
import { ProductHeader } from "./ProducHeader";
import { ProductOverview } from "./ProductOverview/ProductOverview";

export function ProductDetails(): JSX.Element {
	return (
		<section>
			<ProductHeader />
			<ProductOverview />
			<ProductCards />
			<BeforeFooterSection />
		</section>
	);
}
