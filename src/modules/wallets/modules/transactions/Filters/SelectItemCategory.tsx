import type { ISelectOption } from "@/modules/shared/interfaces/select-options.interface";
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { getCategoryIcon } from "../../categories/const/category-icons";

interface SelectItemCategoryProps {
	categories: Pick<CategoryEntity, "icon" | "id" | "name">[];
}

export const SelectItemCategory = ({
	categories,
}: SelectItemCategoryProps): ISelectOption[] => {
	return categories.map((category) => {
		const Icon = getCategoryIcon(category.icon);

		return {
			label: (
				<div className="inline-flex items-center gap-2">
					<Icon />
					<span>{category.name}</span>
				</div>
			),
			value: category.id,
		};
	});
};
