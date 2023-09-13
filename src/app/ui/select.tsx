import { SelectHTMLAttributes } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string | number; label: string }[]
}

export default function Select({ options, ...rest }: Props) {
    return (
        <select
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            {...rest}
        >
            {options.map(({ value, label }) => {
                return (
                    <option key={value} value={value}>
                        {label}
                    </option>
                )
            })}
        </select>
    )
}
