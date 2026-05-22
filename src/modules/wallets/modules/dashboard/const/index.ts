import { getCurrentWeekRange } from "@/modules/shared/helpers/getCurrentWeekRange";

export const PARAMS_DEFAULT_ACTIVITY = {
	offset: 0,
	limit: 8,
};

export const FILTERS_DEFAULT_ACTIVITY = {
	from: getCurrentWeekRange().from,
	to: getCurrentWeekRange().to,
	orderBy: null,
	type: null,
	walletId: null
};