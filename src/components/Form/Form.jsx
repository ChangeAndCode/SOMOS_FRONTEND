import './style.css'
import React, { useEffect, useRef, useState } from 'react';
import { fetcher } from '../../utils/fetcher';


export default function Form({ show, setShow, fields, data, route, method, editId, setData, submitText = 'Enviar', formRef }) {
    
    // fields: array de objetos { name, label, type, placeholder, required }    
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (data) {
            console.log("data: ", data)
            setFormData(data);
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
        console.log("FormData:", formData)
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

    const handleImageChange = async (e) => {
        console.log("Imagen agregada: ", e.target.files[0])

        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('upload_preset', 'somosproject');
        data.append('folder', 'somos');

        const res = await fetch('https://api.cloudinary.com/v1_1/dqkrricbh/image/upload', {
            method: 'POST',
            body: data,
        });

        const file = await res.json();
        console.log('Imagen subida:', file.secure_url);
        setFormData(prev => ({
            ...prev,
            images: [...(prev.images || []), file.secure_url]
        }));
    };

    const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toISOString().split('T')[0]; // "YYYY-MM-DD"
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
                        value={type === 'date' ? formatDateForInput(formData[name]) : (formData[name] || '')}
                        onChange={handleChange}
                        required={required}
                        style={{ padding: '.5rem', width: '100%', fontFamily: 'sans-serif'}}
                    />
                </div>
            ))}

                <div className='previewImgs'>
                    <p>Images</p>
                    {formData.images? formData.images.map(img => 
                        <img src={img} alt="imagen no encontrada" />
                    ) : <></>}
                    <input type="file" multiple onChange={handleImageChange} style={{width: '100%'}}/>
                </div>
            
            <button type="submit">{submitText}</button>
        </form>
        )}
    </>
}

