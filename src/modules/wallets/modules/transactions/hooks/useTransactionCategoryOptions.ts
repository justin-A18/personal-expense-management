import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { SelectItemCategory } from "../Filters/SelectItemCategory";

export const useTransactionCategoryOptions = (categories: CategoryEntity[]) => {
	return {
		categoryOptions: SelectItemCategory({ categories }),
	};
};
