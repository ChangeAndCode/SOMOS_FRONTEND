import './style.css'
import React, { useEffect, useRef, useState } from 'react';

export default function Form({ fields, onSubmit, submitText = 'Enviar' }) {
    
    // fields: array de objetos { name, label, type, placeholder, required }
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Opcional: limpiar formulario después de enviar
        setFormData(initialFormState);
    };
    
    const formRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(formRef.current && !formRef.current.contains(e.target)) {
                setShowForm(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showForm])

    return <>
        <button className='formDropdown' onClick={() => setShowForm(prev => !prev)}>
            <img src="../icons/plus.svg" alt="plus icon" />Agregar</button>

        {showForm && (
        <form onSubmit={handleSubmit} ref={formRef} className='form'>
            {fields.map(({ name, label, type = 'text', placeholder = '', required = false }) => (
                <div key={name}>
                <label htmlFor={name} style={{ display: 'block', marginBottom: '.3rem' }}>
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                    style={{ padding: '.5rem', width: '100%' }}
                />
                </div>
            ))}
            <button type="submit">{submitText}</button>
        </form>
        )}
    </>
}