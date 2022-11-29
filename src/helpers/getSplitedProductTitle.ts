export function getSplitedProductTitle(productTitle: string) {
	const splittedTitle = productTitle.split(" ");
	const titleLastWord = splittedTitle.pop();
	const firstPartTitle = splittedTitle.join(" ");
	return { titleLastWord, firstPartTitle };
}
