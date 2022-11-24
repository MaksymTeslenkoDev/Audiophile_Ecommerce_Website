import "./amount.input.style.scss";

interface Props {
	handleChange: (value: number) => void;
	value: number;
}

export function AmountInput({ handleChange, value }: Props): JSX.Element {
	function inc() {
		value += 1;
		handleChange(value);
	}

	function dec() {
		value -= 1;
		handleChange(value);
	}

	return (
		<div className="amount-input">
			<button type="button" onClick={dec} className="amount-input__selector">
				-
			</button>
			<span className="amount-input__value">{value}</span>
			<button type="button" onClick={inc} className="amount-input__selector">
				+
			</button>
		</div>
	);
}
