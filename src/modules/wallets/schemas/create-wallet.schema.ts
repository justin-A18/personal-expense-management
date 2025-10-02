import z from "zod";

export const createWalletSchema = z.object({
	name: z.string().min(3, {
		message: "El nombre debe tener al menos 3 caracteres.",
	}),
	currency: z.string().min(1, {
		message: "La moneda debe tener al menos 1 caracteres.",
	}),
	balance: z
		.string()
		.regex(/^\d+(\.\d+)?$/, {
			message: "El balance debe ser un número decimal válido.",
		})
		.refine((val) => parseFloat(val) >= 0, {
			message: "El balance debe ser mayor o igual a 0.",
		})
		.optional()
		.default("0"),
	avatar: z.string().min(3, {
		message: "El avatar debe tener al menos 3 caracteres.",
	}),
});

export type CreateWalletSchema = z.infer<typeof createWalletSchema>;