import { Footer } from "shared/Footer";
import { WithChildren } from "shared/types";

interface Props extends WithChildren {}
export function Layout({ children }: Props): JSX.Element {
	return (
		<div className="app-container">
			<div className="app-container__main">{children}</div>
			<div className="app-container__footer">
				<Footer />
			</div>
		</div>
	);
}
