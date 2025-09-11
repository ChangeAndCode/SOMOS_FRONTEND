export const FormField = ({ 
    label, 
    name, 
    type = 'text', 
    required = false, 
    value, 
    onChange, 
    placeholder, 
    className = '' 
}) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
            {label} {required && '*'}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200 ${className}`}
        />
    </div>
);