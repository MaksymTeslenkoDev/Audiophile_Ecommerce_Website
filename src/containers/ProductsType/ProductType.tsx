import { ProductCards } from "shared/ProductCards";
import { BeforeFooterSection } from "shared/BeforeFooterBlock";
import { ProductTypeHeaderSection } from "./HeaderSection";
import { useGetProductTypeItems } from "./hooks/useGetProductTypeItems";
import { TypeProductsSection } from "./TypeProductsSection";

export function ProductType(): JSX.Element {
	const state = useGetProductTypeItems();
	return (
		<section>
			<ProductTypeHeaderSection productType={state.productType} />
			<TypeProductsSection items={state.items} />
			<ProductCards />
			<BeforeFooterSection />
		</section>
	);
}
