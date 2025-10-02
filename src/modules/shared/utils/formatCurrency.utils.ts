export const formatCurrency = (amount: string, currency: string) => {

	const value = parseFloat(amount);

	if (isNaN(value)) return `${amount}`;

	const options: Intl.NumberFormatOptions = {
		style: 'currency',
		currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	};

	const formatter = new Intl.NumberFormat('es-PE', options);
	return `${formatter.format(value)}`;
};
