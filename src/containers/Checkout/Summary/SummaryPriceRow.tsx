interface SummaryPriceRowProps {
	title: string;
	amount: string;
	isTotal?: boolean;
}
export function SummaryPriceRow({
	title,
	amount,
	isTotal,
}: SummaryPriceRowProps): JSX.Element {
	return (
		<div className="summary__price-row">
			<span className="summary__price-row__title">{title}</span>
			<span
				className={`summary__price-row__amount ${isTotal && "grand-total"}`}
			>
				{amount}
			</span>
		</div>
	);
}
SummaryPriceRow.defaultProps = {
	isTotal: false,
};
