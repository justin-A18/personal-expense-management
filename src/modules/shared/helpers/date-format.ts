export const padDatePart = (value: number) => String(value).padStart(2, '0');

export const formatDate = (date?: Date | null): string => {
	if (!date || isNaN(date.getTime())) return '';

	const year = date.getFullYear();
	const month = padDatePart(date.getMonth() + 1);
	const day = padDatePart(date.getDate());

	return `${year}-${month}-${day}`;
};

export const parseDate = (value?: string): Date | undefined => {
	if (!value) return undefined;

	const [year, month, day] = value.split('-').map(Number);
	if (!year || !month || !day) return undefined;

	return new Date(year, month - 1, day);
};

export const formatMonthValue = (date: Date) =>
	`${date.getFullYear()}-${padDatePart(date.getMonth() + 1)}`;

export const parseMonthValue = (value: string) => {
	const [year, month] = value.split('-').map(Number);
	return new Date(year, month - 1, 1);
};

const monthFormatter = new Intl.DateTimeFormat('es-PE', {
	month: 'long',
	year: 'numeric',
});

export const formatMonthLabel = (value: string) => {
	const date = parseMonthValue(value);
	return monthFormatter.format(date);
};
