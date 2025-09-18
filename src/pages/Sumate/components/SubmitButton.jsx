export const SubmitButton = ({ 
    children, 
    isLoading = false, 
    loadingText = 'Enviando...', 
    className = '',
    disabled = false,
    ...props 
}) => (
    <button 
        type="submit" 
        className={`w-full bg-[#8a3677] hover:bg-[#6d2a5b] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        disabled={isLoading || disabled}
        {...props}
    >
        {isLoading ? loadingText : children}
    </button>
);