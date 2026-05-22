"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

interface Props extends PropsWithChildren {
	href?: string;
	label: string;
	onClick?: () => void;
	variant?: "default" | "danger";
}

export const ItemSideBar = ({
	children,
	href,
	label,
	onClick,
	variant = "default",
}: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	const commonClasses = cn(
		"group relative z-[70] inline-flex size-12 items-center justify-center rounded-xl border text-[#aaaaaa] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50",
		"hover:-translate-y-0.5 hover:border-purple-300/30 hover:bg-purple-400/10 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-950/20",
		isActive
			? "border-purple-300/40 bg-purple-500/15 text-purple-100 shadow-lg shadow-purple-950/20"
			: "border-white/10 bg-white/[0.03]",
		variant === "danger" &&
			"hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-100",
	);

	const content = (
		<>
			<span
				className={cn(
					"absolute z-[99999] -left-2 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-purple-400 opacity-0 transition-opacity",
					isActive && "opacity-100",
				)}
			/>
			<span className="[&_svg]:size-5">{children}</span>
			<span className="pointer-events-none absolute left-[calc(100%+12px)] top-1/2 z-[99999] -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#1e1e1e] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl shadow-black/30 transition-opacity group-hover:opacity-100">
				{label}
			</span>
		</>
	);

	if (href) {
		return (
			<Link href={href} aria-label={label} className={commonClasses}>
				{content}
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={label}
			className={cn(commonClasses, "cursor-pointer")}
		>
			{content}
		</button>
	);
};
