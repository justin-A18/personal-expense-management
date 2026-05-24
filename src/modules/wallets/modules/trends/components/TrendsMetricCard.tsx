import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react";
import type { TrendMetric } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";
import {
	getComparisonCopy,
	getTrendChangeLabel,
	getTrendTone,
} from "../utils/trends-formatters";
import type { TrendsComparisonMode } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";

interface TrendsMetricCardProps {
	comparisonMode: TrendsComparisonMode;
	formatCurrency: (value: number) => string;
	icon: React.ReactNode;
	invertTone?: boolean;
	label: string;
	metric: TrendMetric;
}

const toneClassName = {
	danger: "bg-red-400/10 text-red-200",
	neutral: "bg-white/[0.05] text-[#d6d6d6]",
	success: "bg-emerald-400/10 text-emerald-200",
};

export const TrendsMetricCard = ({
	comparisonMode,
	formatCurrency,
	icon,
	invertTone = false,
	label,
	metric,
}: TrendsMetricCardProps) => {
	const tone = getTrendTone(metric, invertTone);
	const TrendIcon =
		metric.changePercent === null || metric.changePercent === 0
			? MinusIcon
			: metric.changePercent > 0
				? ArrowUpIcon
				: ArrowDownIcon;

	return (
		<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
			<div className="flex items-start justify-between gap-3">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200">
					{icon}
				</div>
				<div
					className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClassName[tone]}`}
				>
					<TrendIcon className="size-3.5" />
					{getTrendChangeLabel(metric.changePercent)}
				</div>
			</div>

			<div className="mt-4">
				<p className="text-sm font-medium text-[#aaaaaa]">{label}</p>
				<p className="mt-1 text-2xl font-semibold text-white">
					{formatCurrency(metric.current)}
				</p>
				<p className="mt-2 text-xs leading-5 text-[#aaaaaa]">
					Base: {formatCurrency(metric.baseline)} {getComparisonCopy(comparisonMode)}
				</p>
			</div>
		</div>
	);
};
