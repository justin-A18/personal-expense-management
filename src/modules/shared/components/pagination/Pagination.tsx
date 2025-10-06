import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';

interface PaginationProps {
	totalElements: number;
	totalPages: number;
	onPageChange: (params: Record<string, number>) => void;
	params: Record<string, number>;
}

export const Pagination = ({
	onPageChange,
	totalElements,
	totalPages,
	params,
}: PaginationProps) => {
	const { offset, limit } = params;

	const currentPage = Math.floor(offset / limit) + 1;

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onPageChange({ offset: offset - limit, limit });
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange({ offset: offset + limit, limit });
		}
	};

	return (
		<div className='flex items-center space-x-2'>
			<div className='text-muted-foreground flex-1 text-sm'>
				Página {currentPage} de {totalPages} — {totalElements} registros
			</div>
			<div className='space-x-2 flex items-center'>
				<Button
					variant='ghost'
					size='sm'
					disabled={currentPage === 1}
					onClick={handlePreviousPage}
					className='cursor-pointer'>
					<ChevronLeft className='size-6 sm:size-4' />
					<span className='hidden sm:block'>Anterior</span>
				</Button>
				<Button
					variant='ghost'
					size='sm'
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className='cursor-pointer'>
					<span className='hidden sm:block'>Siguiente</span>
					<ChevronRight className='size-6 sm:size-4' />
				</Button>
			</div>
		</div>
	);
};
