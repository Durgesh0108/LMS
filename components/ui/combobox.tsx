"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

// const frameworks = [
// 	{
// 		value: "next.js",
// 		label: "Next.js",
// 	},
// 	{
// 		value: "sveltekit",
// 		label: "SvelteKit",
// 	},
// 	{
// 		value: "nuxt.js",
// 		label: "Nuxt.js",
// 	},
// 	{
// 		value: "remix",
// 		label: "Remix",
// 	},
// 	{
// 		value: "astro",
// 		label: "Astro",
// 	},
// ];

interface ComboBoxProps {
	options: {
		label: string;
		value: string;
	}[];
	value?: string;
	onChange: (value: string) => void;
}

export const ComboBox = ({ options, value, onChange }: ComboBoxProps) => {
	const [open, setOpen] = React.useState(false);
	// const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value
						? options.find((option) => option.value === value)
								?.label
						: "Select Option..."}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput
						placeholder="Search Option..."
						className="h-9"
					/>
					<CommandEmpty>No Option found.</CommandEmpty>
					<CommandGroup>
						{options.map((option) => (
							<CommandItem
								key={option.value}
								value={option.value}
								onSelect={() => {
									onChange(
										option.value === value
											? ""
											: option.value
									);
									setOpen(false);
								}}
							>
								{option.label}
								<CheckIcon
									className={cn(
										"ml-auto h-4 w-4",
										value === option.value
											? "opacity-100"
											: "opacity-0"
									)}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
