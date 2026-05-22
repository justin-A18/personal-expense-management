import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getCurrentWeekRange } from "@/modules/shared/helpers/getCurrentWeekRange";
import { mappedWeeklyReportData } from "../../../mappers/day.mapper";
import { mappedMonthlyReportData } from "../../../mappers/month.mapper";
import {
	getReportMonthly,
	getReportWeekly,
} from "../../../services/transactions.service";
import { useWalletStore } from "../../../store/useWalletStore";
import { TRANSACTION_TYPE } from "../../dashboard/enums";
import { getDefaultMonthFilter, getMonthRange } from "../utils/report-date-range";
import { currencyFormatter } from "../utils/report-formatters";
import { buildWeeklyReport } from "../utils/report-weekly-data";

export const useReports = () => {
	const currentWallet = useWalletStore((state) => state.wallet);
	const [monthFilter, setMonthFilter] = useState(getDefaultMonthFilter);
	const walletId = currentWallet?.id ?? "";
	const monthRange = useMemo(
		() => getMonthRange(monthFilter.from, monthFilter.to),
		[monthFilter.from, monthFilter.to],
	);
	const weekRange = getCurrentWeekRange();

	const handleMonthFilterChange = (key: "from" | "to", value: string) => {
		setMonthFilter((current) => {
			if (!value) {
				return current;
			}

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

	const { data: monthlyReport = [], isFetching: isFetchingMonthlyReport } =
		useQuery({
			enabled: Boolean(walletId),
			initialData: [],
			queryKey: ["reports", "monthly", { walletId, ...monthRange }],
			queryFn: async () => {
				const { data } = await getReportMonthly({
					from: monthRange.from,
					to: monthRange.to,
					walletId,
				});

				return mappedMonthlyReportData(data);
			},
		});

	const { data: weeklyIncomeReport = [], isFetching: isFetchingWeeklyIncome } =
		useQuery({
			enabled: Boolean(walletId),
			initialData: [],
			queryKey: ["reports", "weekly-income", { walletId, ...weekRange }],
			queryFn: async () => {
				const { data } = await getReportWeekly({
					from: weekRange.from,
					to: weekRange.to,
					type: TRANSACTION_TYPE.INCOME,
					walletId,
				});

				return mappedWeeklyReportData(data);
			},
		});

	const {
		data: weeklyExpenseReport = [],
		isFetching: isFetchingWeeklyExpense,
	} = useQuery({
		enabled: Boolean(walletId),
		initialData: [],
		queryKey: ["reports", "weekly-expense", { walletId, ...weekRange }],
		queryFn: async () => {
			const { data } = await getReportWeekly({
				from: weekRange.from,
				to: weekRange.to,
				type: TRANSACTION_TYPE.EXPENSE,
				walletId,
			});

			return mappedWeeklyReportData(data);
		},
	});

	const weeklyReport = useMemo(() => {
		return buildWeeklyReport(weeklyIncomeReport, weeklyExpenseReport);
	}, [weeklyExpenseReport, weeklyIncomeReport]);

	const totals = useMemo(() => {
		const income = monthlyReport.reduce((acc, item) => acc + item.income, 0);
		const expense = monthlyReport.reduce((acc, item) => acc + item.expense, 0);
		const balance = income - expense;
		const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0;
		const highestExpenseMonth = monthlyReport.reduce(
			(current, item) => (item.expense > current.expense ? item : current),
			{ expense: 0, income: 0, month: "Sin datos" },
		);

		return {
			balance,
			expense,
			highestExpenseMonth,
			income,
			savingsRate,
		};
	}, [monthlyReport]);

	return {
		currencyFormatter,
		handleMonthFilterChange,
		isFetchingReports:
			isFetchingMonthlyReport ||
			isFetchingWeeklyIncome ||
			isFetchingWeeklyExpense,
		monthFilter,
		monthlyReport,
		monthRange,
		totals,
		weeklyReport,
	};
};
