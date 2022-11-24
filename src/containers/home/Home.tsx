import "./styles/home.styles.scss";
import { BeforeFooterSection } from "shared/BeforeFooterBlock";
import { ProductCards } from "shared/ProductCards";
import { HeaderSection } from "./HeaderSection";
import { ProductsSection } from "./ProductsSection";

export function Home(): JSX.Element {
	return (
		<main>
			<HeaderSection />
			<ProductCards />
			<ProductsSection />
			<BeforeFooterSection />
		</main>
	);
}
