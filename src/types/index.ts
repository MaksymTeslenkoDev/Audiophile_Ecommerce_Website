export interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	features: string;
	type: ProductTypes;
	inTheBox: Array<{
		amount: number;
		itemTitle: string;
	}>;
	images: {
		mobile: ProductImagesData;
		tablet: ProductImagesData;
		desktop: ProductImagesData;
		cartThumbnail: string;
	};
	isNew: boolean;
	similars: Array<{ productId: string }>;
}

type ProductImagesData = {
	preview: string;
	main: string;
	galery: {
		img1: string;
		img2: string;
		img3: string;
	};
	similarsThumbnail?: string;
};

export enum ProductTypes {
	headphones = "headphones",
	speakers = "speakers",
	earphones = "earphones",
}
