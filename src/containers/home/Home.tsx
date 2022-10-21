import { Container } from "react-bootstrap";
import { NavBar } from "shared/NavBar/index";
import "./home.styles.scss";
import { HeaderSection } from "./HeaderSection";

export function Home(): JSX.Element {
	return (
		<main className="home">
			<Container fluid="md">
				<NavBar />
				<HeaderSection />
			</Container>
		</main>
	);
}
