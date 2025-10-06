'use client';

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/modules/shared/ui/table';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	hideHeader?: boolean;
	noDataComponent?: React.ReactNode;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	hideHeader = false,
	noDataComponent,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className='overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C]/90 backdrop-blur-sm'>
			<Table className='w-full text-sm text-gray-300'>
				{!hideHeader && (
					<TableHeader className='sticky top-0 z-10 bg-[#222222]/95 backdrop-blur-md'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow
								key={headerGroup.id}
								className='border-b border-[#333333] hover:bg-[#2b2b2b]'>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-400'>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
				)}

				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								className='border-b border-[#2E2E2E] transition duration-200 hover:bg-[#292929]/80 hover:shadow-inner'>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className='px-6 py-4'>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow className='hover:bg-transparent'>
							<TableCell className='flex items-center justify-center'>
								{noDataComponent
									? noDataComponent
									: 'Sin registros disponibles'}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
