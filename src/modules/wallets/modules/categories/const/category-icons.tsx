import {
	BanknoteIcon,
	BriefcaseBusinessIcon,
	CarIcon,
	ClapperboardIcon,
	GraduationCapIcon,
	HeartPulseIcon,
	HomeIcon,
	PlaneIcon,
	ReceiptTextIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	SparklesIcon,
	TagsIcon,
	UtensilsIcon,
	WalletIcon,
} from "lucide-react";

export type CategoryIconKey =
	| "banknote"
	| "briefcase"
	| "car"
	| "clapperboard"
	| "graduation"
	| "health"
	| "home"
	| "plane"
	| "receipt"
	| "shopping-bag"
	| "shopping-cart"
	| "sparkles"
	| "tags"
	| "utensils"
	| "wallet";

export interface CategoryIconOption {
	icon: React.ComponentType<{ className?: string }>;
	keywords: string[];
	label: string;
	value: CategoryIconKey;
}

export const CATEGORY_ICON_OPTIONS: CategoryIconOption[] = [
	{
		icon: UtensilsIcon,
		keywords: ["comida", "restaurante", "almuerzo", "cena"],
		label: "Comida",
		value: "utensils",
	},
	{
		icon: CarIcon,
		keywords: ["auto", "taxi", "bus", "transporte"],
		label: "Transporte",
		value: "car",
	},
	{
		icon: HomeIcon,
		keywords: ["casa", "alquiler", "hogar"],
		label: "Hogar",
		value: "home",
	},
	{
		icon: HeartPulseIcon,
		keywords: ["salud", "doctor", "medicina"],
		label: "Salud",
		value: "health",
	},
	{
		icon: ShoppingCartIcon,
		keywords: ["supermercado", "compras", "mercado"],
		label: "Supermercado",
		value: "shopping-cart",
	},
	{
		icon: ShoppingBagIcon,
		keywords: ["ropa", "tienda", "shopping"],
		label: "Compras",
		value: "shopping-bag",
	},
	{
		icon: BriefcaseBusinessIcon,
		keywords: ["trabajo", "negocio", "oficina"],
		label: "Trabajo",
		value: "briefcase",
	},
	{
		icon: BanknoteIcon,
		keywords: ["salario", "sueldo", "efectivo"],
		label: "Ingreso",
		value: "banknote",
	},
	{
		icon: WalletIcon,
		keywords: ["billetera", "finanzas", "dinero"],
		label: "Billetera",
		value: "wallet",
	},
	{
		icon: ReceiptTextIcon,
		keywords: ["recibo", "servicio", "pago"],
		label: "Servicios",
		value: "receipt",
	},
	{
		icon: ClapperboardIcon,
		keywords: ["cine", "ocio", "entretenimiento"],
		label: "Ocio",
		value: "clapperboard",
	},
	{
		icon: GraduationCapIcon,
		keywords: ["estudio", "curso", "educacion"],
		label: "Educacion",
		value: "graduation",
	},
	{
		icon: PlaneIcon,
		keywords: ["viaje", "vacaciones", "vuelo"],
		label: "Viajes",
		value: "plane",
	},
	{
		icon: SparklesIcon,
		keywords: ["extra", "especial", "personal"],
		label: "Especial",
		value: "sparkles",
	},
	{
		icon: TagsIcon,
		keywords: ["categoria", "tag", "general"],
		label: "General",
		value: "tags",
	},
];

export const CATEGORY_ICON_MAP = CATEGORY_ICON_OPTIONS.reduce(
	(acc, option) => {
		acc[option.value] = option.icon;
		return acc;
	},
	{} as Record<CategoryIconKey, CategoryIconOption["icon"]>,
);

export const getCategoryIcon = (icon?: CategoryIconKey) =>
	CATEGORY_ICON_MAP[icon ?? "tags"] ?? TagsIcon;
