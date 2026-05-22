import {
	formatMonthValue,
	padDatePart,
} from '@/modules/shared/helpers/date-format';

export interface MonthFilter {
	from: string;
	to: string;
}

export const getDefaultMonthFilter = (): MonthFilter => {
	const today = new Date();
	const from = new Date(today.getFullYear(), today.getMonth() - 5, 1);

	return {
		from: formatMonthValue(from),
		to: formatMonthValue(today),
	};
};

export const getMonthRange = (fromMonth: string, toMonth: string) => {
	const [fromYear, fromMonthIndex] = fromMonth.split('-').map(Number);
	const [toYear, toMonthIndex] = toMonth.split('-').map(Number);
	const from = new Date(fromYear, fromMonthIndex - 1, 1);
	const to = new Date(toYear, toMonthIndex, 0);

	return {
		from: `${from.getFullYear()}-${padDatePart(from.getMonth() + 1)}-01`,
		to: `${to.getFullYear()}-${padDatePart(to.getMonth() + 1)}-${padDatePart(to.getDate())}`,
	};
};
