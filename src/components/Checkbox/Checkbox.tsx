export interface CheckboxProps {
    checked: boolean;
    label: string;
    value: string;
    onChange: (checked: boolean, value: string) => void;
}

export default function Checkbox({ checked, label, value, onChange }: CheckboxProps) {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked, value);
    };

    return (
        <div className="flex items-center mb-4">
            <input
                id={value}
                type="checkbox"
                value={value}
                checked={checked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label htmlFor={value} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                {label}
            </label>
        </div>
    )
}
