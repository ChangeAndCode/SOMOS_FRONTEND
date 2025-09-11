import { useState } from 'react';
import DonationMethodCard from './DonationMethodCard';

export default function DonationSection() {
    const [selectedMethod, setSelectedMethod] = useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('¡Copiado al portapapeles!');
        }).catch(() => {
            alert('No se pudo copiar. Selecciona el texto manualmente.');
        });
    };

    const bankDetails = {
        bankName: "Banco Nacional",
        accountNumber: "100-01-000-123456",
        accountType: "Cuenta Empresarial",
        beneficiary: "Fundación Somos Unión A.C.",
    };

    const bankDetailsArray = [
        { label: "Banco", value: bankDetails.bankName, key: "bankName" },
        { label: "Número de Cuenta", value: bankDetails.accountNumber, key: "accountNumber" },
        { label: "Tipo de Cuenta", value: bankDetails.accountType, key: "accountType" },
        { label: "Beneficiario", value: bankDetails.beneficiary, key: "beneficiary" },
    ];

    const donationMethods = [
        {
            method: 'transfer',
            icon: '🏦',
            title: 'Transferencia Bancaria',
            description: 'Realiza una transferencia directa a nuestra cuenta bancaria. Seguro y confiable.'
        },
        {
            method: 'paypal',
            icon: '💳',
            title: 'PayPal',
            description: 'Dona de forma rápida y segura usando PayPal. Acepta tarjetas de crédito y débito.'
        }
    ];

    const handlePayPalClick = () => {
        // Simular redirección a PayPal
        window.open('https://paypal.me/SomosUnionAC', '_blank');
    };

    return (
        <>
        <div className="w-full min-h-screen flex items-center justify-center py-8">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8a3677] mb-4">Elige tu Forma de Donar</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">Tu donación nos ayuda a seguir impactando vidas positivamente. Elige el método que más te convenga:</p>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl">
                {donationMethods.map((methodData) => (
                    <DonationMethodCard
                        key={methodData.method}
                        method={methodData.method}
                        selectedMethod={selectedMethod}
                        icon={methodData.icon}
                        title={methodData.title}
                        description={methodData.description}
                        onSelect={setSelectedMethod}
                    />
                ))}
            </div>

            {selectedMethod === 'transfer' && (
                <div className="w-full mt-8 p-6 sm:p-8 bg-gray-50 rounded-xl max-w-4xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Datos Bancarios para Transferencia</h3>
                    <div className="space-y-4 mb-8">
                        {bankDetailsArray.map((item) => (
                            <div key={item.key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white rounded-lg border-l-4 border-[#00aca6] shadow-sm">
                                <span className="font-semibold text-gray-800 mb-1 sm:mb-0">{item.label}:</span>
                                <span className="font-mono text-gray-600 mb-2 sm:mb-0 text-sm sm:text-base">{item.value}</span>
                                <button 
                                    className="bg-[#00aca6] hover:bg-[#057470] text-white text-sm px-4 py-2 rounded-md transition-colors duration-200 self-start sm:self-auto"
                                    onClick={() => copyToClipboard(item.value)}
                                >
                                    Copiar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedMethod === 'paypal' && (
                <div className="w-full mt-8 p-6 sm:p-8 bg-gray-50 rounded-xl max-w-4xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Donar con PayPal</h3>
                    <p className="text-gray-600 mb-8 text-center">Te redirigiremos a nuestro perfil de PayPal donde podrás realizar tu donación de forma segura.</p>
                    
                    <div className="text-center mb-6">
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-lg"
                            onClick={handlePayPalClick}
                        >
                            Donar Ahora con PayPal
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 text-center bg-blue-50 p-4 rounded-lg">
                        PayPal acepta tarjetas de crédito, débito y transferencias bancarias.
                    </p>
                </div>
            )}
            </div>
        </div>
        </>
    );
}
