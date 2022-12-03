import React, { InputHTMLAttributes } from "react";
import { RefCallBack } from "react-hook-form";
import "./app.input.scss";

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	helperText?: string;
	id: string;
	ref?: RefCallBack;
	error?: boolean;
}

export const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
	(props, refCustom) => {
		const { id, label, helperText, error, ...rest } = props;
		return (
			<div className="app-input-wrapper">
				<div className="app-input-wrapper__labels-row">
					<label
						className={`input-label ${error ? "input-label--error error" : ""}`}
						htmlFor={id}
					>
						{label}
					</label>
					{error && (
						<p
							className={`input-error-message ${
								error ? "input-error-message--error error" : ""
							}`}
						>
							{helperText}
						</p>
					)}
				</div>
				<input
					className={`app-input-wrapper__input ${
						error ? "app-input-wrapper__input--error error" : ""
					}`}
					id={id}
					ref={refCustom}
					{...rest}
				/>
			</div>
		);
	},
);

AppInput.defaultProps = {
	error: false,
	ref: undefined,
	helperText: "",
};
