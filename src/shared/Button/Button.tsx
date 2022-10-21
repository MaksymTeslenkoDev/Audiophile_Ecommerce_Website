import React from "react";
import { WithChildren } from "shared/types";
import "./button.styles.scss";

interface Props
	extends WithChildren,
		Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	variant?: "contained" | "outlined" | "transparent";
	color?: "primary" | "light" | "dark";
	className?: string;
	id?: string;
	onClick?: () => void;
	size?: "sm" | "md" | "lg";
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
	icon?: React.ReactNode;
}

export function Button({
	children,
	variant = "contained",
	color = "primary",
	className,
	id,
	onClick,
	size = "md",
	type = "button",
	disabled = false,
	icon,
}: Props): JSX.Element {
	return (
		/* eslint-disable react/button-has-type */
		<button
			className={`btn-component  ${className} btn-component_${variant} btn-component_${size} btn-component_${color} ${
				disabled ? "btn-component_disabled" : ""
			}  `}
			id={id}
			type={type}
			onClick={onClick}
		>
			{children}
			{icon || undefined}
		</button>
		/* eslint-enable react/button-has-type */
	);
}

Button.defaultProps = {
	variant: "contained",
	color: "primary",
	className: undefined,
	id: undefined,
	onClick: undefined,
	size: "md",
	type: "button",
	disabled: false,
	icon: undefined,
};
