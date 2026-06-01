"use client";

import {
	CheckIcon,
	ChevronDownIcon,
	Loader2Icon,
	SearchIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Button } from "@/modules/shared/ui/button";
import { Input } from "@/modules/shared/ui/input";
import { Label } from "@/modules/shared/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/modules/shared/ui/popover";
import { cn } from "@/modules/shared/utils/cn";

export interface SearchInputSelectOption {
	label: ReactNode;
	value: string;
}

interface CustomSearchInputSelectProps {
	className?: string;
	disabled?: boolean;
	emptyMessage?: string;
	error?: string;
	isLoading?: boolean;
	items: SearchInputSelectOption[];
	label?: string;
	onSearchChange: (value: string) => void;
	onValueChange: (value: string) => void;
	placeholder?: string;
	searchPlaceholder?: string;
	searchValue: string;
	value?: string;
}

export const CustomSearchInputSelect = ({
	className,
	disabled = false,
	emptyMessage = "No se encontraron resultados.",
	error,
	isLoading = false,
	items,
	label,
	onSearchChange,
	onValueChange,
	placeholder = "Selecciona una opción",
	searchPlaceholder = "Buscar...",
	searchValue,
	value,
}: CustomSearchInputSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const selectedItem = useMemo(
		() => items.find((item) => item.value === value),
		[items, value],
	);

	const handleSelect = (nextValue: string) => {
		onValueChange(nextValue);
		setIsOpen(false);
	};

	return (
		<div className={cn("space-y-2", className)}>
			{label ? <Label className="text-[#aaaaaa]">{label}</Label> : null}

			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<Button
						type="button"
						variant="outline"
						disabled={disabled}
						aria-expanded={isOpen}
						aria-haspopup="listbox"
						aria-invalid={Boolean(error)}
						className={cn(
							"h-11 w-full justify-between rounded-lg border border-[#707070] bg-[#1e1e1e] px-3 py-2 text-left text-sm font-medium text-white shadow-inner shadow-black/20 outline-none transition-[border-color,background-color,box-shadow,color] hover:border-purple-300/60 hover:bg-[#262626] hover:text-white focus-visible:border-purple-300/70 focus-visible:ring-2 focus-visible:ring-purple-400/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-purple-200 [&_svg:not([class*='size-'])]:size-4",
							!selectedItem && "text-[#aaaaaa] hover:text-[#aaaaaa]",
							error && "border-red-400/60 ring-1 ring-red-400/20",
						)}
					>
						<div className="min-w-0 flex-1 truncate">
							{selectedItem?.label ?? placeholder}
						</div>
						<ChevronDownIcon className="size-4 shrink-0 text-purple-200 opacity-90" />
					</Button>
				</PopoverTrigger>

				<PopoverContent
					align="start"
					className="w-[var(--radix-popover-trigger-width)] rounded-xl border-white/10 bg-[#1e1e1e] p-1.5 text-white shadow-2xl shadow-black/40"
				>
					<div className="relative">
						<SearchIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 size-4 text-purple-200 opacity-80" />
						<Input
							value={searchValue}
							onChange={(event) => onSearchChange(event.target.value)}
							aria-label={searchPlaceholder}
							placeholder={searchPlaceholder}
							className="h-10 rounded-lg border-[#707070] bg-[#1e1e1e] pr-3 pl-9 text-sm text-white shadow-inner shadow-black/20 placeholder:text-[#aaaaaa] focus-visible:border-purple-300/70 focus-visible:ring-2 focus-visible:ring-purple-400/50"
						/>
					</div>

					<div className="mt-2 max-h-60 overflow-y-auto pr-1" role="listbox">
						{isLoading ? (
							<div className="flex items-center justify-center gap-2 px-3 py-6 text-sm text-[#aaaaaa]">
								<Loader2Icon className="size-4 animate-spin" />
								Buscando...
							</div>
						) : null}

						{!isLoading && items.length === 0 ? (
							<p className="px-3 py-6 text-center text-sm text-[#aaaaaa]">
								{emptyMessage}
							</p>
						) : null}

						{!isLoading
							? items.map((item) => {
									const isSelected = item.value === value;

									return (
										<button
											key={item.value}
											type="button"
											aria-selected={isSelected}
											onClick={() => handleSelect(item.value)}
											role="option"
											className={cn(
												"flex min-h-10 w-full cursor-default items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white outline-hidden transition-colors hover:bg-purple-400/10 hover:text-purple-100 focus:bg-purple-400/10 focus:text-purple-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-purple-200 [&_svg:not([class*='size-'])]:size-4",
												isSelected && "bg-purple-500/15 text-purple-100",
											)}
										>
											<div className="min-w-0 flex-1 truncate">
												{item.label}
											</div>
											{isSelected ? (
												<CheckIcon className="size-4 shrink-0 text-purple-300" />
											) : null}
										</button>
									);
								})
							: null}
					</div>
				</PopoverContent>
			</Popover>

			{error ? <p className="text-sm text-red-300">{error}</p> : null}
		</div>
	);
};
