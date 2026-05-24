"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
	CATEGORY_ICON_OPTIONS,
	type CategoryIconKey,
} from "../../const/category-icons";

interface CategoryIconPickerModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSelect: (icon: CategoryIconKey) => void;
	selectedIcon: CategoryIconKey;
}

export const CategoryIconPickerModal = ({
	isOpen,
	onClose,
	onSelect,
	selectedIcon,
}: CategoryIconPickerModalProps) => {
	const [search, setSearch] = useState("");
	const filteredIcons = useMemo(() => {
		const normalizedSearch = search.trim().toLowerCase();
		if (!normalizedSearch) return CATEGORY_ICON_OPTIONS;

		return CATEGORY_ICON_OPTIONS.filter((option) => {
			const searchableText = [option.label, ...option.keywords]
				.join(" ")
				.toLowerCase();
			return searchableText.includes(normalizedSearch);
		});
	}, [search]);

	if (!isOpen) return null;

	return createPortal(
		<div
			className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
			onClick={onClose}
		>
			<section
				className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#1e1e1e] p-5 text-white shadow-2xl shadow-black/50"
				onClick={(event) => event.stopPropagation()}
			>
				<header className="flex items-start justify-between gap-4">
					<div>
						<p className="text-sm font-medium text-purple-200">
							Personalizacion
						</p>
						<h2 className="text-xl font-semibold text-white">
							Seleccionar icono
						</h2>
					</div>

					<button
						type="button"
						aria-label="Cerrar selector de iconos"
						className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#aaaaaa] transition-colors hover:bg-white/[0.06] hover:text-white"
						onClick={onClose}
					>
						<XIcon className="size-4" />
					</button>
				</header>

				<div className="relative mt-5">
					<SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#aaaaaa]" />
					<input
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						placeholder="Buscar icono"
						className="min-h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-3 text-sm text-white outline-none transition-colors placeholder:text-[#707070] focus:border-purple-300/50 focus:ring-2 focus:ring-purple-400/20"
					/>
				</div>

				<div className="mt-4 grid max-h-[360px] grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-5">
					{filteredIcons.map((option) => {
						const Icon = option.icon;
						const isSelected = option.value === selectedIcon;

						return (
							<button
								key={option.value}
								type="button"
								className={`flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-2xl border px-2 text-center text-xs transition-colors ${
									isSelected
										? "border-purple-300/70 bg-purple-400/15 text-purple-100"
										: "border-white/10 bg-white/[0.03] text-[#d6d6d6] hover:border-purple-300/40 hover:bg-purple-400/10 hover:text-white"
								}`}
								onClick={() => {
									onSelect(option.value);
									onClose();
								}}
							>
								<Icon className="size-5" />
								<span className="line-clamp-1">{option.label}</span>
							</button>
						);
					})}
				</div>
			</section>
		</div>,
		document.body,
	);
};
