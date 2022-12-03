import { FormProvider, useForm } from "react-hook-form";
import { AppFormInput } from "shared/Input/AppInput/AppFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "shared/Button";

const schema = yup.object().shape({
	name: yup.string().required("Required"),
});

export function Checkout(): JSX.Element {
	const methods = useForm<{ name: string }>({
		mode: "onBlur",
		resolver: yupResolver(schema),
	});
	const handleSubmit = methods.handleSubmit(() => {});

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit}>
				<div style={{ width: "400px" }}>
					<AppFormInput
						name="name"
						label="Name"
						id="name"
						helperText="error"
						placeholder="test"
					/>
				</div>

				<Button type="submit">Submit</Button>
			</form>
		</FormProvider>
	);
}
