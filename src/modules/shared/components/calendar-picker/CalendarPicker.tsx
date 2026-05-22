"use client";

import { CalendarRangeIcon } from "lucide-react";
import {
	formatDate,
	formatMonthLabel,
	formatMonthValue,
} from "../../helpers/date-format";
import { Button } from "../../ui/button";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "../../utils/cn";

export const calendarPickerClassNames = {
	month_caption: "flex h-10 w-full items-center justify-center px-10",
	caption_label:
		"flex h-8 items-center justify-center gap-1 rounded-lg px-2 text-sm font-semibold text-white",
	button_previous:
		"inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-0 text-[#aaaaaa] hover:bg-purple-400/10 hover:text-purple-100",
	button_next:
		"inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-0 text-[#aaaaaa] hover:bg-purple-400/10 hover:text-purple-100",
	nav: "absolute inset-x-0 top-1 flex w-full items-center justify-between px-1",
	dropdowns:
		"flex h-10 w-full items-center justify-center gap-1.5 px-9 text-sm font-medium text-white sm:gap-2 sm:px-10",
	dropdown_root:
		"relative flex h-8 min-w-[88px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] px-2 text-xs text-white shadow-inner shadow-black/20 transition-colors focus-within:border-purple-300/50 focus-within:bg-purple-400/10 focus-within:ring-2 focus-within:ring-purple-400/20 sm:min-w-[104px] sm:px-3 sm:text-sm",
	dropdown:
		"absolute inset-0 h-full w-full cursor-pointer bg-[#1e1e1e] opacity-0",
	weekday:
		"flex-1 rounded-md text-[0.72rem] font-medium uppercase text-[#aaaaaa]",
	week: "mt-1 flex w-full",
	today:
		"rounded-lg bg-purple-400/10 text-purple-100 data-[selected=true]:bg-purple-500",
	outside: "text-[#707070] opacity-60",
	disabled: "pointer-events-none text-[#555555] opacity-40",
};

interface CalendarPickerProps {
	buttonClassName?: string;
	captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
	disabled?: (date: Date) => boolean;
	displayFormat?: "date" | "month";
	formatLabel?: (date: Date) => string;
	onSelect: (date: Date | undefined) => void;
	placeholder?: string;
	selected?: Date;
}

export const CalendarPicker = ({
	buttonClassName,
	captionLayout = "label",
	disabled,
	displayFormat = "date",
	formatLabel,
	onSelect,
	placeholder = "Selecciona una fecha",
	selected,
}: CalendarPickerProps) => {
	const getLabel = (date: Date) => {
		if (formatLabel) return formatLabel(date);
		if (displayFormat === "month")
			return formatMonthLabel(formatMonthValue(date));
		return formatDate(date);
	};

	const label = selected ? getLabel(selected) : placeholder;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant="outline"
					className={cn(
						"min-h-11 w-full justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 text-white shadow-inner shadow-black/20 hover:border-purple-300/50 hover:bg-purple-400/10 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-400/40",
						buttonClassName,
					)}
				>
					<span
						className={cn(
							"truncate",
							selected ? "capitalize text-white" : "text-[#aaaaaa]",
						)}
					>
						{label}
					</span>
					<CalendarRangeIcon className="size-4 shrink-0 text-purple-200" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="center"
				className="max-w-[calc(100vw-24px)] p-2 sm:p-3"
			>
				<Calendar
					mode="single"
					captionLayout={captionLayout}
					selected={selected}
					defaultMonth={selected}
					disabled={disabled}
					onSelect={onSelect}
					className="w-[min(320px,calc(100vw-48px))] rounded-xl border border-white/10 bg-[#1e1e1e] text-white shadow-inner shadow-white/5"
					classNames={calendarPickerClassNames}
				/>
			</PopoverContent>
		</Popover>
	);
};
