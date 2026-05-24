import { z } from "zod";
import { CATEGORY_ICON_OPTIONS } from "../const/category-icons";

const categoryIconKeys = CATEGORY_ICON_OPTIONS.map(
	(option) => option.value,
) as [
	(typeof CATEGORY_ICON_OPTIONS)[number]["value"],
	...(typeof CATEGORY_ICON_OPTIONS)[number]["value"][],
];

export const createCategorySchema = z.object({
	description: z.string().trim().min(3, "Ingresa una descripcion"),
	icon: z.enum(categoryIconKeys),
	name: z.string().trim().min(2, "Ingresa al menos 2 caracteres"),
	type: z.enum(["Ingreso", "Gasto"], {
		message: "Selecciona un tipo de categoria",
	}),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
