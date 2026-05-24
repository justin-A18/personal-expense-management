import {
	ChartPieIcon,
	LayoutDashboardIcon,
	ReceiptTextIcon,
	TagsIcon,
	TrendingUpIcon,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
	{ href: '/dashboard', icon: <LayoutDashboardIcon />, label: 'Dashboard' },
	{
		href: '/categories',
		icon: <TagsIcon />,
		label: 'Categorías',
	},
	{ href: '/transactions', icon: <ReceiptTextIcon />, label: 'Transacciones' },
	{ href: '/trends', icon: <TrendingUpIcon />, label: 'Tendencias' },
	{ href: '/reports', icon: <ChartPieIcon />, label: 'Reportes' },
];
