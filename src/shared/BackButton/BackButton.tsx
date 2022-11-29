import { useNavigate } from "react-router-dom";

export function BackButton(): JSX.Element {
	const navigate = useNavigate();
	return (
		<button type="button" onClick={() => navigate(-1)} className="back-button">
			Go Back
		</button>
	);
}
