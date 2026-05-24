import type { ISelectOption } from "@/modules/shared/interfaces/select-options.interface";
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { getCategoryIcon } from "../../categories/const/category-icons";

interface SelectItemCategoryProps {
	categories: CategoryEntity[];
}

export const SelectItemCategory = ({
	categories,
}: SelectItemCategoryProps): ISelectOption[] => {
	return categories.map((category) => {
		const Icon = getCategoryIcon(category.icon);

		return {
			label: (
				<div className="inline-flex gap-2 items-center">
					<Icon />
					<span>{category.name}</span>
				</div>
			),
			value: category.id,
		};
	});
};
