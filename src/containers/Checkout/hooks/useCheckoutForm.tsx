import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useModalContext } from "../../Modal/Context/ModalProvider";

interface CheckoutForm {
	name: string;
	email: string;
	phone: string;
	address: string;
	zip: number;
	city: string;
	country: string;
	paymentMethod: PaymentMethod;
	eMoneyNumber?: number;
	eMoneyPin?: number;
}
export enum PaymentMethod {
	EMoney = "eMoney",
	CashDelivery = "cashDelivery",
}
// export type CheckoutFormFields = Omit<CheckoutForm, "paymentMethod">;
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
	name: yup.string().required("Required"),
	email: yup.string().email("Wrong format").required("Required"),
	phone: yup.string().matches(phoneRegExp, "Wrong format").required("Required"),
	address: yup.string().required("Required"),
	zip: yup.number().required("Required"),
	city: yup.string().required("Required"),
	country: yup.string().required("Required"),
	paymentMethod: yup
		.string()
		.oneOf([`${PaymentMethod.CashDelivery}`, `${PaymentMethod.EMoney}`])
		.required(),
	eMoneyNumber: yup
		.string()
		.ensure()
		.when("paymentMethod", {
			is: PaymentMethod.EMoney,
			then: yup
				.string()
				.matches(/^[0-9]{9}$/, "Must be exactly 9 digits")
				.required(),
		}),
	eMoneyPin: yup
		.string()
		.ensure()
		.when("paymentMethod", {
			is: PaymentMethod.EMoney,
			then: yup
				.string()
				.matches(/^[0-9]{4}$/, "Must be exactly 4 digits")
				.required(),
		}),
});
export function useCheckoutForm() {
	const methods = useForm<CheckoutForm>({
		mode: "onBlur",
		defaultValues: {
			paymentMethod: PaymentMethod.EMoney,
		},
		resolver: yupResolver(schema),
	});

	const { switchModal } = useModalContext();
	const [payment, setPayment] = React.useState<PaymentMethod>(
		PaymentMethod.EMoney,
	);

	const handleChangePayment = (value: string) => {
		methods.setValue("paymentMethod", value as PaymentMethod);
		if (value == PaymentMethod.CashDelivery) {
			methods.setValue("eMoneyNumber", undefined);
			methods.setValue("eMoneyPin", undefined);
		}
		setPayment(value as PaymentMethod);
	};
	const handleSubmit = methods.handleSubmit(() => {
		switchModal();
	});

	return { methods, handleSubmit, handleChangePayment, payment };
}
