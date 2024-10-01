import { useState } from "react";

export interface SelectProps extends Omit<React.ComponentProps<'select'>, 'onSelect'> {
    options?: SelectOption[];
    onSelect(id: string): void;
}

interface SelectOption {
    label: string;
    value: string;
}

export function Select({ options, onSelect, ...props }: SelectProps) {
    const [selected, setSelected] = useState<string>('');

    const onOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue);
        onSelect(selectedValue);
    }
    return (
        <select
            id="select"
            onChange={onOptionSelect}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...props}
            value={selected}
        >
            {options?.map(option => (
                <option
                    value={option.value}
                    key={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    )
}