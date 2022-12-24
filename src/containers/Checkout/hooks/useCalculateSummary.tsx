import { calculateVat } from "helpers/calculateVat";
import { getTotalCartPrice } from "helpers/getTotalCartPrice";
import { useCartContext } from "../../Cart/Context/CartProvider";

export function useCalculateSummary() {
	const { cartState } = useCartContext();
	const totalBasketAmount = getTotalCartPrice(cartState.products);
	const shippingAmount = 50;
	const vatAmount = calculateVat(totalBasketAmount);
	const totalPaymentAmount = totalBasketAmount + shippingAmount + vatAmount;
	return { totalBasketAmount, shippingAmount, totalPaymentAmount, vatAmount };
}
