import './style.css'
import React, { useEffect, useRef, useState } from 'react';
import { fetcher } from '../../utils/fetcher';


export default function Form({ show, setShow, fields, route, method, editId, setData, submitText = 'Enviar', formRef }) {
    
    // fields: array de objetos { name, label, type, placeholder, required }
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);
    

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form data: ", formData)

        const response = await fetcher(route, {
            method: method,
            body: JSON.stringify(formData),
            auth: true
        })
        setShow(false)
        console.log("Response del post: ", response)
        
        if(method === 'POST'){
            setData(prevData => [...prevData, response])
        } else {
            setData(prevData =>
                prevData.map(item =>
                    item._id === editId ? { ...item, ...response } : item
                )
            )
        }
        // Opcional: limpiar formulario después de enviar
        setFormData(initialFormState);
    };


    return <>
        
        {show && (
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