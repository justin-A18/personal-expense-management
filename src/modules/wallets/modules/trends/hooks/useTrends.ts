"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import type { TrendsComparisonMode } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";
import { getTrendsReport } from "@/modules/wallets/services/transactions.service";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";
import { currencyFormatter } from "../../reports/utils/report-formatters";
import { buildMockTrendsReport } from "../mocks/trends.mock";
import { getCurrentMonthDateRange } from "../utils/trends-formatters";

const USE_TRENDS_MOCK = true;

export const useTrends = () => {
	const currentWallet = useWalletStore((state) => state.wallet);
	const walletId = currentWallet?.id ?? "";
	const [dateRange, setDateRange] = useState(getCurrentMonthDateRange);
	const [comparisonMode, setComparisonMode] =
		useState<TrendsComparisonMode>("previous_period");

	const handleDateRangeChange = (key: "from" | "to", value: string) => {
		if (!value) return;

		setDateRange((current) => {
			if (key === "from" && value > current.to) {
				return { from: value, to: value };
			}

			if (key === "to" && value < current.from) {
				return { from: value, to: value };
			}

			return {
				...current,
				[key]: value,
			};
		});
	};

	const {
		data,
		isError,
		isFetching,
		refetch,
	} = useQuery({
		enabled: Boolean(walletId) && !USE_TRENDS_MOCK,
		queryKey: ["reports", "trends", { walletId, ...dateRange, comparisonMode }],
		queryFn: async () => {
			const { data } = await getTrendsReport({
				comparisonMode,
				from: dateRange.from,
				to: dateRange.to,
				walletId,
			});

			return data;
		},
	});
	const mockTrends = useMemo(
		() =>
			buildMockTrendsReport({
				comparisonMode,
				from: dateRange.from,
				to: dateRange.to,
			}),
		[comparisonMode, dateRange.from, dateRange.to],
	);

	return {
		comparisonMode,
		currencyFormatter,
		dateRange,
		handleDateRangeChange,
		isError: USE_TRENDS_MOCK ? false : isError,
		isFetching: USE_TRENDS_MOCK ? false : isFetching,
		refetch,
		setComparisonMode,
		trends: USE_TRENDS_MOCK ? mockTrends : data,
	};
};
