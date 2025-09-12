export default function DonationMethodCard({ 
    method, 
    selectedMethod, 
    icon, 
    title, 
    description, 
    onSelect 
}) {
    const isSelected = selectedMethod === method;
    
    return (
        <div 
            className={`border-2 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white ${
                isSelected 
                    ? 'border-[#8a3677] bg-gradient-to-br from-white to-[#8a3677]/10' 
                    : 'border-gray-300 hover:border-[#8a3677] hover:bg-gradient-to-br hover:from-white hover:to-[#8a3677]/5'
            }`}
            onClick={() => onSelect(method)}
        >
            <span className="text-5xl mb-4 block">{icon}</span>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}
