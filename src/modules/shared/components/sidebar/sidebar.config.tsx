import {
	HouseIcon,
	ChartColumnDecreasingIcon,
	GitForkIcon,
	TrendingUpDownIcon,
	ChartPieIcon,
	InfoIcon,
	LogOutIcon,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
	{ href: '/dashboard', icon: <HouseIcon /> },
	{ href: '/categories', icon: <ChartColumnDecreasingIcon /> },
	{ href: '/example2', icon: <GitForkIcon /> },
	{ href: '/example3', icon: <TrendingUpDownIcon /> },
	{ href: '/example4', icon: <ChartPieIcon /> },
];

export const SIDEBAR_ITEMS_BOTTOM = [
	{ icon: <InfoIcon />, onclick: () => {} },
	{ icon: <LogOutIcon />, onclick: () => {} },
];
