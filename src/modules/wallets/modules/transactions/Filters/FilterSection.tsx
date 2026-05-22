interface FilterSectionProps {
	children: React.ReactNode;
	icon: React.ReactNode;
	title: string;
}

export const FilterSection = ({ children, icon, title }: FilterSectionProps) => {
	return (
		<section className="rounded-xl border border-white/10 bg-white/[0.03] p-3 shadow-sm">
			<div className="mb-3 flex items-center gap-3">
				<div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-400/10 text-purple-200">
					{icon}
				</div>
				<div className="min-w-0">
					<h3 className="text-base font-semibold text-white">{title}</h3>
				</div>
			</div>
			{children}
		</section>
	);
};