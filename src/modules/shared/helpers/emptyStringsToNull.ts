type EmptyStringsToNull<T extends object> = {
	[K in keyof T]: T[K] extends string | null | undefined ? T[K] | null : T[K];
};

export const emptyStringsToNull = <T extends object>(
	obj: T,
): EmptyStringsToNull<T> => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => {
			if (typeof value === 'string' && value.trim() === '') {
				return [key, null];
			}
			return [key, value];
		}),
	) as EmptyStringsToNull<T>;
};
