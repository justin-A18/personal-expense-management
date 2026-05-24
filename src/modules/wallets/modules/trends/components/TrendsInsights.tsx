import {
	AlertTriangleIcon,
	CheckCircle2Icon,
	InfoIcon,
	XCircleIcon,
} from "lucide-react";
import type { TrendInsight } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";

interface TrendsInsightsProps {
	insights: TrendInsight[];
}

const insightStyle = {
	danger: {
		className: "bg-red-400/10 text-red-200",
		icon: XCircleIcon,
	},
	info: {
		className: "bg-sky-400/10 text-sky-200",
		icon: InfoIcon,
	},
	success: {
		className: "bg-emerald-400/10 text-emerald-200",
		icon: CheckCircle2Icon,
	},
	warning: {
		className: "bg-amber-400/10 text-amber-200",
		icon: AlertTriangleIcon,
	},
};

export const TrendsInsights = ({ insights }: TrendsInsightsProps) => {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#252525]/90 p-4">
			<h2 className="text-base font-semibold text-white">Lecturas rapidas</h2>
			<p className="mt-1 text-sm text-[#aaaaaa]">
				Senales calculadas a partir de la comparacion seleccionada.
			</p>

			<div className="mt-4 space-y-3">
				{insights.length === 0 ? (
					<p className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-[#aaaaaa]">
						Sin alertas para el periodo seleccionado.
					</p>
				) : (
					insights.map((insight) => {
						const style = insightStyle[insight.type];
						const InsightIcon = style.icon;

						return (
							<div
								key={`${insight.type}-${insight.title}`}
								className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
							>
								<div
									className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${style.className}`}
								>
									<InsightIcon className="size-4" />
								</div>
								<div className="min-w-0">
									<p className="text-sm font-medium text-white">
										{insight.title}
									</p>
									<p className="mt-1 text-sm leading-5 text-[#aaaaaa]">
										{insight.description}
									</p>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
