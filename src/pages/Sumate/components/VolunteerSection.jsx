import { useState } from 'react';

export default function VolunteerSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        profession: '',
        availability: '',
        interests: '',
        experience: '',
        motivation: '',
        comments: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const simulateEmailSending = async () => {
        // Simular envío de email (aquí normalmente harías la llamada al backend)
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Simulando envío de email con datos:', formData);
                resolve(true);
            }, 2000);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Simular el envío del formulario
            await simulateEmailSending();
            
            setSubmitStatus('success');
            // Resetear el formulario
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                birthDate: '',
                profession: '',
                availability: '',
                interests: '',
                experience: '',
                motivation: '',
                comments: ''
            });
        } catch (error) {
            console.error('Error enviando formulario:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center py-8">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#8a3677] mb-4">Únete como Voluntario</h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">¡Queremos conocerte! Completa este formulario y nos pondremos en contacto contigo.</p>
                    </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        Información Personal
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">Nombre *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Apellidos *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Correo Electrónico *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Teléfono *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700">Fecha de Nacimiento</label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                            />
                        </div>
                         <div className="space-y-2">
                            <label htmlFor="availability" className="block text-sm font-semibold text-gray-700">¿Cuál es tu disponibilidad? (Opcional)</label>
                            <select
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200 bg-white"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="weekday_morning">Entre semana - Mañana</option>
                                <option value="weekday_afternoon">Entre semana - Tarde</option>
                                <option value="weekday_evening">Entre semana - Noche</option>
                                <option value="weekend_morning">Fin de semana - Mañana</option>
                                <option value="weekend_afternoon">Fin de semana - Tarde</option>
                                <option value="weekend_evening">Fin de semana - Noche</option>
                                <option value="flexible">Horario flexible</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="availabilityDetails" className="block text-sm font-semibold text-gray-700">Detalles sobre tu disponibilidad (Opcional)</label>
                        <input
                            type="text"
                            id="availabilityDetails"
                            name="availabilityDetails"
                            value={formData.availabilityDetails || ''}
                            onChange={handleInputChange}
                            placeholder="Ej: Lunes a miércoles de 4-6 pm, sábados por la mañana..."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        Áreas de Interés
                    </h3>
                    
                    <div className="space-y-2">
                        <label htmlFor="interests" className="block text-sm font-semibold text-gray-700">¿En qué áreas te gustaría colaborar? (Opcional)</label>
                        <textarea
                            id="interests"
                            name="interests"
                            value={formData.interests}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Ej: Educación, apoyo comunitario, eventos, redes sociales, administración, etc."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8a3677] focus:outline-none transition-colors duration-200 resize-vertical"
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-[#8a3677] hover:bg-[#6d2a5b] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Quiero ser Voluntario'}
                </button>

                {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border-l-4 border-green-400 text-green-700 rounded-lg">
                        <p className="font-semibold">¡Gracias por tu interés!</p>
                        <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
                        <p>Te enviaremos un correo de confirmación a {formData.email || 'tu correo electrónico'}.</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded-lg">
                        <p className="font-semibold">Error al enviar la solicitud</p>
                        <p>Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.</p>
                    </div>
                )}
            </form>
                </div>
            </div>
        </div>
    );
}
