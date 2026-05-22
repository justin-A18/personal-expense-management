"use client";

import { Skeleton } from "@/modules/shared/ui/skeleton";
import { useGridCard } from "../../hooks/useGridCard";
import { GridCardBarChart } from "./GridCardBarChart";
import { GridCardsLineChart } from "./GridCardLineChart";

export const GridCardContainer = () => {
	const {
		reportWeekly,
		reportMonthly,
		isFetchingMonthlyReport,
		isFetchingWeeklyReport,
	} = useGridCard();

	return (
		<div className="2xl:row-span-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 2xl:grid-rows-2 gap-4">
			{isFetchingWeeklyReport ? (
				<Skeleton />
			) : (
				<GridCardsLineChart data={reportWeekly} />
			)}

			{isFetchingMonthlyReport ? (
				<Skeleton />
			) : (
				<GridCardBarChart data={reportMonthly} />
			)}
		</div>
	);
};
