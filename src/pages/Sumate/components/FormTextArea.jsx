export const FormTextArea = ({ 
    label, 
    name, 
    value, 
    onChange, 
    placeholder, 
    rows = 4,
    required = false 
}) => (
    <div className="space-y-2">
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
            {label} {required && '*'}
        </label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200 resize-vertical"
        />
    </div>
);
