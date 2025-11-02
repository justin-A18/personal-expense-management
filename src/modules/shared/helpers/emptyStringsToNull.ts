export const emptyStringsToNull = <T extends Record<string, any>>(obj: T): T => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => {
			if (typeof value === 'string' && value.trim() === '') {
				return [key, null];
			}
			return [key, value];
		})
	) as T;
};
