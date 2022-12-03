import { UseControllerProps, useController } from "react-hook-form";
import { AppInput, AppInputProps } from "./AppInput";

export function AppFormInput({
	id,
	label,
	...props
}: AppInputProps & UseControllerProps): JSX.Element {
	const {
		field: { ref: input, name, onChange },
		fieldState: { invalid, error },
	} = useController(props);
	return (
		<AppInput
			{...props}
			id={name}
			label={label}
			helperText={error?.message}
			error={invalid}
			ref={input}
			onChange={onChange}
		/>
	);
}
