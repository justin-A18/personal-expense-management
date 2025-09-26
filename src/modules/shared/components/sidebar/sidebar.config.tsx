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
	{ href: '/admin', icon: <HouseIcon /> },
	{ href: '/admin/categories', icon: <ChartColumnDecreasingIcon /> },
	{ href: '/example2', icon: <GitForkIcon /> },
	{ href: '/example3', icon: <TrendingUpDownIcon /> },
	{ href: '/example4', icon: <ChartPieIcon /> },
];

export const SIDEBAR_ITEMS_BOTTOM = [
	{ href: '/example5', icon: <InfoIcon /> },
	{ href: '/example6', icon: <LogOutIcon /> },
];
