import { PaymentMethod } from "containers/Checkout/hooks/useCheckoutForm";
import { RadioButton } from "./RadioButton";
import "./radio.scss";

interface RadioButtonsGroupProps {
	items: Array<Record<"value" | "label", string>>;
	onChange: (value: string) => void;
	checked: PaymentMethod;
}

export function RadioButtonsGroup({
	items,
	onChange,
	checked,
}: RadioButtonsGroupProps) {
	return (
		<div>
			{items.map((i) => (
				<div key={Math.random()} className="radio-btn-field">
					<RadioButton
						value={i.value}
						label={i.label}
						isChecked={checked == i.value}
						onChange={onChange}
					/>
				</div>
			))}
		</div>
	);
}
