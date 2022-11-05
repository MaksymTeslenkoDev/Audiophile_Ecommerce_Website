import "./styles/home.styles.scss";
import { HeaderSection } from "./HeaderSection";
import { ProductsSection } from "./ProductsSection";

export function Home(): JSX.Element {
	return (
		<main>
			<HeaderSection />
			<ProductsSection />
		</main>
	);
}
