import { CalendarPicker } from "@/modules/shared/components/calendar-picker/CalendarPicker";
import {
	formatMonthValue,
	parseMonthValue,
} from "@/modules/shared/helpers/date-format";

interface ReportsMonthFilterProps {
	from: string;
	onChange: (key: "from" | "to", value: string) => void;
	to: string;
}

export const ReportsMonthFilter = ({
	from,
	onChange,
	to,
}: ReportsMonthFilterProps) => {
	const fromDate = parseMonthValue(from);
	const toDate = parseMonthValue(to);

	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p className="text-sm font-medium text-white">Resumen financiero</p>
				<p className="mt-1 text-sm text-[#aaaaaa]">
					Filtra el reporte mensual por un rango de meses.
				</p>
			</div>

			<div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2">
				<label className="grid gap-2 text-sm font-medium text-[#d6d6d6]">
					Desde
					<CalendarPicker
						selected={fromDate}
						displayFormat="month"
						captionLayout="dropdown"
						buttonClassName="sm:w-[190px]"
						disabled={(date) => date > toDate}
						onSelect={(date) => {
							if (date) onChange("from", formatMonthValue(date));
						}}
					/>
				</label>

				<label className="grid gap-2 text-sm font-medium text-[#d6d6d6]">
					Hasta
					<CalendarPicker
						selected={toDate}
						displayFormat="month"
						captionLayout="dropdown"
						buttonClassName="sm:w-[190px]"
						disabled={(date) => date < fromDate}
						onSelect={(date) => {
							if (date) onChange("to", formatMonthValue(date));
						}}
					/>
				</label>
			</div>
		</div>
	);
};
