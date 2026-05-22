'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/modules/shared/utils/cn';

function Select({
	...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
	return (
		<SelectPrimitive.Root
			data-slot='select'
			{...props}
		/>
	);
}

function SelectGroup({
	...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
	return (
		<SelectPrimitive.Group
			data-slot='select-group'
			{...props}
		/>
	);
}

function SelectValue({
	...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
	return (
		<SelectPrimitive.Value
			data-slot='select-value'
			{...props}
		/>
	);
}

function SelectTrigger({
	className,
	size = 'default',
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
	size?: 'sm' | 'default';
}) {
	return (
		<SelectPrimitive.Trigger
			data-slot='select-trigger'
			data-size={size}
			className={cn(
				"flex w-fit items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-[#707070] bg-[#1e1e1e] px-3 py-2 text-sm font-medium text-white shadow-inner shadow-black/20 outline-none transition-[border-color,background-color,box-shadow,color] hover:border-purple-300/60 hover:bg-[#262626] focus-visible:border-purple-300/70 focus-visible:ring-2 focus-visible:ring-purple-400/50 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-[#aaaaaa] data-[size=default]:h-11 data-[size=sm]:h-9 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-purple-200 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}>
			{children}
			<SelectPrimitive.Icon asChild>
				<ChevronDownIcon className='size-4 text-purple-200 opacity-90 transition-transform duration-200 data-[state=open]:rotate-180' />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
}

function SelectContent({
	className,
	children,
	position = 'popper',
	...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				data-slot='select-content'
				className={cn(
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[60] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-xl border border-white/10 bg-[#1e1e1e] text-white shadow-2xl shadow-black/40',
					position === 'popper' &&
						'data-[side=bottom]:translate-y-2 data-[side=left]:-translate-x-2 data-[side=right]:translate-x-2 data-[side=top]:-translate-y-2',
					className,
				)}
				position={position}
				{...props}>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cn(
						'p-1.5',
						position === 'popper' &&
							'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
					)}>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectLabel({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
	return (
		<SelectPrimitive.Label
			data-slot='select-label'
			className={cn('px-2 py-1.5 text-xs font-semibold text-[#aaaaaa]', className)}
			{...props}
		/>
	);
}

function SelectItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item
			data-slot='select-item'
			className={cn(
				"relative flex w-full cursor-default items-center gap-2 rounded-lg py-2 pr-9 pl-3 text-sm text-white outline-hidden transition-colors select-none focus:bg-purple-400/10 focus:text-purple-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-purple-500/15 data-[state=checked]:text-purple-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='text-'])]:text-purple-200 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className,
			)}
			{...props}>
			<span className='absolute right-2.5 flex size-4 items-center justify-center text-purple-200'>
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className='size-4' />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function SelectSeparator({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
	return (
		<SelectPrimitive.Separator
			data-slot='select-separator'
			className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
			{...props}
		/>
	);
}

function SelectScrollUpButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
	return (
		<SelectPrimitive.ScrollUpButton
			data-slot='select-scroll-up-button'
			className={cn(
				'flex cursor-default items-center justify-center py-1 text-[#aaaaaa]',
				className,
			)}
			{...props}>
			<ChevronUpIcon className='size-4' />
		</SelectPrimitive.ScrollUpButton>
	);
}

function SelectScrollDownButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
	return (
		<SelectPrimitive.ScrollDownButton
			data-slot='select-scroll-down-button'
			className={cn(
				'flex cursor-default items-center justify-center py-1 text-[#aaaaaa]',
				className,
			)}
			{...props}>
			<ChevronDownIcon className='size-4' />
		</SelectPrimitive.ScrollDownButton>
	);
}

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};
