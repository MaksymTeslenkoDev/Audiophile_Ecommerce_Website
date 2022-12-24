import "./radio.scss";

interface RadioButtonProps {
	value: string;
	label: string;
	isChecked: boolean;
	onChange: (value: string) => void;
}
export function RadioButton({
	value,
	label,
	onChange,
	isChecked,
}: RadioButtonProps): JSX.Element {
	return (
		<label className="radio-wrapper" htmlFor={value}>
			<input
				onChange={(event) => onChange(event.target.value)}
				type="radio"
				id={value}
				checked={isChecked}
				name="radio"
				value={value}
				className="radio-wrapper__input"
			/>
			<p className="radio-wrapper__label">{label}</p>
		</label>
	);
}
