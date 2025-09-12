export const FormSelect = ({ 
    label, 
    name, 
    value, 
    onChange, 
    options, 
    placeholder = "Selecciona una opción",
    required = false 
}) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
            {label} {required && '*'}
        </label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200 bg-white"
        >
            <option value="">{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);