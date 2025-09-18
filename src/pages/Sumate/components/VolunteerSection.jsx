import { useState } from 'react';
import { FormField } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { FormSelect } from './FormSelect';
import { SubmitButton } from './SubmitButton';
import { StatusMessage } from './StatusMessage';
import { fetcher } from '../../../utils/fetcher';

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
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        setErrorMessage('');

        // Validación básica del lado del cliente
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
            setSubmitStatus('error');
            setErrorMessage('Por favor, completa todos los campos obligatorios.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Limpiar datos antes de enviar (remover campos vacíos opcionales)
            const cleanedData = Object.entries(formData).reduce((acc, [key, value]) => {
                if (value && value.trim() !== '') {
                    acc[key] = value.trim();
                }
                return acc;
            }, {});

            // Enviar datos al backend usando fetcher
            const response = await fetcher('api/sumate/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cleanedData)
            });

            console.log('✅ Formulario de voluntario enviado exitosamente:', response);
            
            setSubmitStatus('success');
            
            // Resetear el formulario después del éxito
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
            console.error('Error enviando formulario de voluntario:', error);
            setSubmitStatus('error');
            
            // Mostrar mensaje de error específico si está disponible
            if (error.message) {
                setErrorMessage(error.message);
            } else if (error.errors && Array.isArray(error.errors)) {
                setErrorMessage(error.errors.map(err => err.msg).join(', '));
            } else {
                setErrorMessage('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Opciones para el select de disponibilidad
    const availabilityOptions = [
        { value: 'weekday_morning', label: 'Entre semana - Mañana' },
        { value: 'weekday_afternoon', label: 'Entre semana - Tarde' },
        { value: 'weekday_evening', label: 'Entre semana - Noche' },
        { value: 'weekend_morning', label: 'Fin de semana - Mañana' },
        { value: 'weekend_afternoon', label: 'Fin de semana - Tarde' },
        { value: 'weekend_evening', label: 'Fin de semana - Noche' },
        { value: 'flexible', label: 'Horario flexible' }
    ];

    return (
        <div className="w-full min-h-screen flex items-center justify-center py-8">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#8a3677] mb-4">Súmate como Voluntario</h2>
                        
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Información Personal */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    label="Nombre"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <FormField
                                    label="Apellidos"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    label="Correo Electrónico"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <FormField
                                    label="Teléfono"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    label="Fecha de Nacimiento"
                                    name="birthDate"
                                    type="date"
                                    value={formData.birthDate}
                                    onChange={handleInputChange}
                                />
                                <FormSelect
                                    label="¿Cuál es tu disponibilidad? (Opcional)"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    options={availabilityOptions}
                                />
                            </div>
                            
                            <FormField
                                label="Detalles sobre tu disponibilidad (Opcional)"
                                name="availabilityDetails"
                                value={formData.availabilityDetails || ''}
                                onChange={handleInputChange}
                                placeholder="Ej: Lunes a miércoles de 4-6 pm, sábados por la mañana..."
                            />
                        </div>

                        {/* Áreas de Interés */}
                        <div className="space-y-6">
                            <FormTextArea
                                label="¿En qué áreas te gustaría colaborar? (Opcional)"
                                name="interests"
                                value={formData.interests}
                                onChange={handleInputChange}
                                placeholder="Ej: Educación, apoyo comunitario, eventos, redes sociales, administración, etc."
                            />
                        </div>

                        <SubmitButton 
                            isLoading={isSubmitting}
                            loadingText="Enviando..."
                        >
                            🚀 Quiero ser Voluntario
                        </SubmitButton>

                        {submitStatus === 'success' && (
                            <StatusMessage type="success" title="¡Gracias por tu interés!">
                                <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
                                <p>Te enviaremos un correo de confirmación a {formData.email || 'tu correo electrónico'}.</p>
                            </StatusMessage>
                        )}

                        {submitStatus === 'error' && (
                            <StatusMessage type="error" title="Error al enviar la solicitud">
                                <p>{errorMessage || 'Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.'}</p>
                            </StatusMessage>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
