"use client";

import { CalendarPicker } from "@/modules/shared/components/calendar-picker/CalendarPicker";
import { CustomSelect } from "@/modules/shared/components/custom-select/CustomSelect";
import {
	formatDate,
	parseDate,
} from "@/modules/shared/helpers/date-format";
import type { TrendsComparisonMode } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";
import { TRENDS_COMPARISON_OPTIONS } from "../const/trends-options";

interface TrendsComparisonFilterProps {
	comparisonMode: TrendsComparisonMode;
	from: string;
	onComparisonModeChange: (value: TrendsComparisonMode) => void;
	onDateRangeChange: (key: "from" | "to", value: string) => void;
	to: string;
}

export const TrendsComparisonFilter = ({
	comparisonMode,
	from,
	onComparisonModeChange,
	onDateRangeChange,
	to,
}: TrendsComparisonFilterProps) => {
	const fromDate = parseDate(from);
	const toDate = parseDate(to);

	return (
		<div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
			<div>
				<p className="text-sm font-medium text-white">Base de comparacion</p>
				<p className="mt-1 text-sm text-[#aaaaaa]">
					Elige el periodo actual y contra que referencia quieres medirlo.
				</p>
			</div>

			<div className="grid w-full gap-3 sm:grid-cols-3 xl:w-auto">
				<label className="grid gap-2 text-sm font-medium text-[#d6d6d6]">
					Desde
					<CalendarPicker
						selected={fromDate}
						captionLayout="dropdown"
						buttonClassName="sm:w-[180px]"
						disabled={(date) => Boolean(toDate && date > toDate)}
						onSelect={(date) => {
							if (date) onDateRangeChange("from", formatDate(date));
						}}
					/>
				</label>

				<label className="grid gap-2 text-sm font-medium text-[#d6d6d6]">
					Hasta
					<CalendarPicker
						selected={toDate}
						captionLayout="dropdown"
						buttonClassName="sm:w-[180px]"
						disabled={(date) => Boolean(fromDate && date < fromDate)}
						onSelect={(date) => {
							if (date) onDateRangeChange("to", formatDate(date));
						}}
					/>
				</label>

				<CustomSelect
					label="Comparar con"
					value={comparisonMode}
					items={TRENDS_COMPARISON_OPTIONS}
					className="max-w-none sm:w-[210px]"
					labelContent="Comparacion"
					onValueChange={(value) => {
						onComparisonModeChange(value as TrendsComparisonMode);
					}}
				/>
			</div>
		</div>
	);
};
