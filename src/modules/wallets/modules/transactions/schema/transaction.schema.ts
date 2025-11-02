import { z } from "zod";

export const advancedFiltersSchema = z.object({
	from: z.string().nullable(),
	to: z.string().nullable(),
	type: z.string().nullable(),
	orderBy: z.string().nullable(),
});

export type AdvancedFiltersSchema = z.infer<typeof advancedFiltersSchema>;
