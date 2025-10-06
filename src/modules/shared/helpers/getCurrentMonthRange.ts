export function getLastSixMonthsRange() {
	const today = new Date();
	const year = today.getFullYear();

	const isFirstSemester = today.getMonth() < 6;
	const from = new Date(year, isFirstSemester ? 0 : 6, 1);
	const to = new Date(year, isFirstSemester ? 6 : 12, 0);

	return {
		from: from.toLocaleDateString('sv-SE'),
		to: to.toLocaleDateString('sv-SE'),
	};
}