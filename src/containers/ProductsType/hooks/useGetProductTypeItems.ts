import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import { getFilteredProductsByType } from "helpers/getFilteredProductsByType";
import { Product } from "types";

export function useGetProductTypeItems() {
	const params = useParams();
	const navigate = useNavigate();
	const [state, setState] = React.useState<{
		productType: string;
		items: Array<Product>;
	}>({
		productType: "",
		items: [],
	});
	React.useEffect(() => {
		if (params.categoryType) {
			const items = getFilteredProductsByType(params.categoryType);
			if (items.length) {
				setState((s) => ({
					...s,
					items,
					productType: params.categoryType ? params.categoryType : "",
				}));
			} else {
				navigate("/");
			}
		}
	}, [params]);
	return state;
}
