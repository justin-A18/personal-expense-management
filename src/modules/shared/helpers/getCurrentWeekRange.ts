export function getCurrentWeekRange() {
	const today = new Date();
	const day = today.getDay();
	const diffToMonday = day === 0 ? -6 : 1 - day;

	const monday = new Date(today);
	monday.setDate(today.getDate() + diffToMonday);

	const sunday = new Date(monday);
	sunday.setDate(monday.getDate() + 6);

	return {
		from: monday.toLocaleDateString('sv-SE'),
		to: sunday.toLocaleDateString('sv-SE'),
	};
}
