import './style.css'
import React, { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';


export default function Form({ show, setShow, fields, data, route, method, editId, setData, submitText = 'Enviar', formRef }) {
    const [files, setFiles] = useState([]);
    
    // fields: array de objetos { name, label, type, placeholder, required }    
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);

    // Helper único para formatear fechas a "YYYY-MM-DD"
    const formatDateYYYYMMDD = (value) => {
        if (!value) return '';
        const dateObj = new Date(value);
        if (isNaN(dateObj)) return value;
        return dateObj.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    // Nota: evitamos forzar repoblado al abrir para no pisar cambios más recientes.

    // Limpiar URLs de objetos cuando el componente se desmonte
    useEffect(() => {
        return () => {
            if (formData.images) {
                formData.images.forEach(imgData => {
                    if (imgData.preview) {
                        URL.revokeObjectURL(imgData.preview);
                    }
                });
            }
        };
    }, [formData.images]);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let body;
            let needsId = method === "PUT" && !route.endsWith(`/${editId}`);
            let url = `${route}${needsId ? `/${editId}` : ""}`;

            // Preparar el body SIEMPRE con FormData (haya o no archivos)
            const form = new FormData();

            // Agregar campos (excepto previews de imágenes)
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'images') return; // evitar previews/urls temporales

                const fieldDef = fields?.find(f => f.name === key);
                let normalized = value;

                // Convertir fechas
                if (fieldDef?.type === 'date' && value) {
                    normalized = formatDateYYYYMMDD(value);
                }

                // Para arrays/objetos, mandar JSON.stringify([...])
                if (typeof normalized === 'object' && normalized !== null) {
                    normalized = JSON.stringify(normalized);
                }

                form.append(key, normalized ?? '');
            });

            // Señalizar limpieza total de imágenes cuando no hay archivos nuevos y el array en estado está vacío
            const imagesState = Array.isArray(formData.images) ? formData.images : [];
            if (files.length === 0 && imagesState.length === 0) {
                form.append('removeAllImages', 'true');
                form.append('images', JSON.stringify([]));
            }

            // Agregar imágenes nuevas con field name "images"
            files.forEach(file => form.append('images', file));

            body = form;

            // Usar fetcher unificado para ambos casos
            const json = await fetcher(url, {
                method,
                body,
                auth: true
            });

            setShow(false);
            if (method === "POST") {
                setData((prevData) => [...prevData, json]);
                // limpiar al crear
                setFormData(initialFormState);
            } else {
                // actualizar local y mantener formulario sincronizado con respuesta
                setData((prevData) =>
                    prevData.map((item) => (item._id === editId ? { ...item, ...json } : item))
                );
                setFormData(prev => ({ ...prev, ...json }));
            }
            setFiles([]);
        } catch (error) {
            console.error("Error al enviar el formulario:", error.message); 
        }
    };

    const handleImageChange = (e) => {
        const selected = Array.from(e.target.files || []);
        
        // Validar tipos de archivo
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        const invalidFiles = selected.filter(file => !validTypes.includes(file.type));
        
        if (invalidFiles.length > 0) {
            alert('Solo se permiten archivos de imagen (JPG, PNG, GIF, WEBP)');
            return;
        }
        
        // Agregar nuevos archivos a los existentes
        const newFiles = [...files, ...selected];
        const newPreviews = selected.map(f => ({
            file: f,
            preview: URL.createObjectURL(f),
            name: f.name,
            size: f.size
        }));
        
        setFiles(newFiles);
        setFormData(prev => ({ 
            ...prev, 
            images: [...(prev.images || []), ...newPreviews]
        }));
        
        // Limpiar el input para permitir seleccionar los mismos archivos nuevamente si es necesario
        e.target.value = '';
    };

    const removeImage = (index) => {
        const target = formData.images?.[index];

        // Si es un archivo nuevo (tiene 'file'), eliminar por referencia del array de archivos
        const updatedFiles = target?.file
            ? files.filter(f => f !== target.file)
            : files;

        // Liberar la URL del objeto que se elimina si existe
        if (target?.preview) {
            URL.revokeObjectURL(target.preview);
        }

        const updatedImages = (formData.images || []).filter((_, i) => i !== index);

        setFiles(updatedFiles);
        setFormData(prev => ({ ...prev, images: updatedImages }));
    };


    // Usamos formatDateYYYYMMDD también para el valor de inputs tipo fecha

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
                        value={type === 'date' ? formatDateYYYYMMDD(formData[name]) : (formData[name] || '')}
                        onChange={handleChange}
                        required={required}
                        style={{ padding: '.5rem', width: '100%', fontFamily: 'sans-serif'}}
                    />
                </div>
            ))}

                <div className='previewImgs'>
                    <p>Imágenes ({formData.images?.length || 0})</p>
                    {formData.images && formData.images.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px', marginBottom: '10px' }}>
                            {formData.images.map((imgData, index) => (
                                <div key={index} style={{ position: 'relative', border: '1px solid #ddd', borderRadius: '4px', padding: '5px' }}>
                                    <img 
                                        src={imgData.preview || imgData} 
                                        alt={`Preview ${index + 1}`}
                                        style={{ 
                                            width: '100%', 
                                            height: '80px', 
                                            objectFit: 'cover', 
                                            borderRadius: '2px' 
                                        }} 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        aria-label="Eliminar imagen"
                                        style={{
                                            position: 'absolute',
                                            top: '2px',
                                            right: '2px',
                                            background: 'red',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '10px',
                                            height: '10px',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        ×
                                    </button>
                                    {imgData.name && (
                                        <p style={{ fontSize: '10px', margin: '2px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {imgData.name}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ color: '#666', fontSize: '14px' }}>No hay imágenes seleccionadas</p>
                    )}
                    <input 
                        type="file" 
                        multiple 
                        accept="image/*"
                        onChange={handleImageChange} 
                        style={{width: '100%'}}
                        title="Selecciona imágenes para agregar (se añadirán a las existentes)"
                    />
                    
                </div>
            
            <button type="submit">{submitText}</button>
        </form>
        )}
    </>
}

