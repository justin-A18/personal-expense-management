import { z } from "zod";

export const createTransactionSchema = z.object({
	type: z.enum(["Gasto", "Ingreso"], {
		message: "Selecciona un tipo de transacción",
	}),
	description: z.string().min(1, "Ingresa una descripción"),
	amount: z.string().min(1, "Ingresa un monto"),
	date: z.string().min(1, "Selecciona una fecha"),
});

export const advancedFiltersSchema = z.object({
	from: z.string().nullable(),
	to: z.string().nullable(),
	type: z.string().nullable(),
	orderBy: z.string().nullable(),
});

export type CreateTransactionSchema = z.infer<typeof createTransactionSchema>;
export type AdvancedFiltersSchema = z.infer<typeof advancedFiltersSchema>;
