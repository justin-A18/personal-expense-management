import type {
	TrendCategoryDistribution,
	TrendCategoryGrowth,
} from "@/modules/wallets/interfaces/trends/get-trends-report.interface";
import { getTrendChangeLabel } from "../utils/trends-formatters";

interface TrendsCategoryListProps {
	formatCurrency: (value: number) => string;
	items: TrendCategoryDistribution[] | TrendCategoryGrowth[];
	mode: "growth" | "distribution";
	title: string;
}

export const TrendsCategoryList = ({
	formatCurrency,
	items,
	mode,
	title,
}: TrendsCategoryListProps) => {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#252525]/90 p-4">
			<div>
				<h2 className="text-base font-semibold text-white">{title}</h2>
				<p className="mt-1 text-sm text-[#aaaaaa]">
					{mode === "growth"
						? "Categorias con mayor movimiento frente a la base elegida."
						: "Peso de cada categoria dentro del gasto actual."}
				</p>
			</div>

			<div className="mt-4 space-y-3">
				{items.length === 0 ? (
					<p className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-[#aaaaaa]">
						Sin datos suficientes para esta seccion.
					</p>
				) : (
					items.slice(0, 5).map((item) => {
						if (mode === "growth") {
							const growthItem = item as TrendCategoryGrowth;

							return (
								<div
									key={growthItem.categoryId}
									className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
								>
									<div className="flex items-start justify-between gap-3">
										<div className="min-w-0">
											<p className="truncate text-sm font-medium text-white">
												{growthItem.categoryName}
											</p>
											<p className="mt-1 text-xs text-[#aaaaaa]">
												{formatCurrency(growthItem.currentAmount)}
											</p>
										</div>
										<span className="shrink-0 rounded-full bg-purple-400/10 px-2.5 py-1 text-xs font-semibold text-purple-100">
											{getTrendChangeLabel(growthItem.changePercent)}
										</span>
									</div>
								</div>
							);
						}

						const distributionItem = item as TrendCategoryDistribution;

						return (
							<div
								key={distributionItem.categoryId}
								className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
							>
								<div className="flex items-start justify-between gap-3">
									<div className="min-w-0">
										<p className="truncate text-sm font-medium text-white">
											{distributionItem.categoryName}
										</p>
										<p className="mt-1 text-xs text-[#aaaaaa]">
											{formatCurrency(distributionItem.amount)}
										</p>
									</div>
									<span className="shrink-0 rounded-full bg-purple-400/10 px-2.5 py-1 text-xs font-semibold text-purple-100">
										{distributionItem.percentage.toFixed(1)}%
									</span>
								</div>
								<div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
									<div
										className="h-full rounded-full bg-purple-400"
										style={{
											width: `${Math.min(distributionItem.percentage, 100)}%`,
										}}
									/>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
