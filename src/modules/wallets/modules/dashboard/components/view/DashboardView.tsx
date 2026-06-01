"use client";

import { GridCardContainer } from "../grid-cards/GridCardContainer";
import { MainActivity } from "../main-activity/MainActivity";

export const DashboardView = () => {
	return (
		<section className="grid min-h-[calc(100vh-135px)] w-full grid-cols-1 gap-4 2xl:grid-cols-3 2xl:grid-rows-4">
			<MainActivity />
			<GridCardContainer />
		</section>
	);
};
