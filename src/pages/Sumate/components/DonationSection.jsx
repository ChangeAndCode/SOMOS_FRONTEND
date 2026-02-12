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
        { label: "BANCO", value: "BANORTE", key: "bank" },
        { label: "Nombre", value: "SOMOS UNION A C", key: "name" },
        { label: "CLABE", value: "072 150 01105229284 3", key: "clabe" },
        { label: "CORREO ELECTRONICO", value: "facturas@cedchihuahua.com.mx", key: "email" },
    ];

    const donationMethods = [
        {
            method: 'transfer',
            icon: '🏦',
            title: 'Transferencia Bancaria',
            description: 'Realiza una transferencia directa a nuestra cuenta bancaria. Seguro y confiable.'
        }
    ];

    return (
        <>
        <div className="w-full min-h-screen flex items-center justify-center py-8">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[60vh]">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8a3677] mb-4">Elige tu Forma de Donar</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">Tu donación nos ayuda a seguir impactando vidas positivamente. Elige el método que más te convenga:</p>

            <div className="w-full flex justify-center items-center mb-8 max-w-4xl">
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

            </div>
        </div>
        </>
    );
}
