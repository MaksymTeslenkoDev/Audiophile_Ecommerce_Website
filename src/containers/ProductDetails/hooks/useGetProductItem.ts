import React, { useState } from "react";
import { getProductById } from "helpers/getProductById";

import { useParams } from "react-router-dom";
import { Product } from "types";

export function useGetProduct() {
	const params = useParams();
	const [product, setProduct] = useState<Product | null>(null);
	React.useEffect(() => {
		if (params.productId) {
			const productEntity = getProductById(params.productId);
			if (productEntity) {
				setProduct(productEntity);
			}
		}
	}, [params]);

	return product;
}
