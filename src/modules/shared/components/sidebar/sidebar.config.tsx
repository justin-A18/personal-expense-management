import {
	HouseIcon,
	ChartColumnDecreasingIcon,
	GitForkIcon,
	TrendingUpDownIcon,
	ChartPieIcon,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
	{ href: '/dashboard', icon: <HouseIcon /> },
	{ href: '/categories', icon: <ChartColumnDecreasingIcon /> },
	{ href: '/transactions', icon: <GitForkIcon /> },
	{ href: '/example3', icon: <TrendingUpDownIcon /> },
	{ href: '/example4', icon: <ChartPieIcon /> },
];
