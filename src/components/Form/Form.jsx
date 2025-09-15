import './style.css'
import React, { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';


export default function Form({ show, setShow, fields, data, route, method, editId, setData, submitText = 'Enviar', formRef }) {
    const [files, setFiles] = useState([]);
    const [deletedImages, setDeletedImages] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [deletedDocuments, setDeletedDocuments] = useState([]);
    
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);

    const formatDateYYYYMMDD = (value) => {
        if (!value) return '';
        const dateObj = new Date(value);
        if (isNaN(dateObj)) return value;
        return dateObj.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (data) {
            setFormData(data);
            setDeletedImages([]);
        }
    }, [data]);

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

            const form = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'images') return;
                
                const fieldDef = fields?.find(f => f.name === key);
                
                // Skip file fields - they're handled separately
                if (fieldDef?.type === 'file') return;
                
                let normalized = value;

                if (fieldDef?.type === 'date' && value) {
                    normalized = formatDateYYYYMMDD(value);
                }

                if (typeof normalized === 'object' && normalized !== null) {
                    normalized = JSON.stringify(normalized);
                }

                form.append(key, normalized ?? '');
            });

            const imagesState = Array.isArray(formData.images) ? formData.images : [];
            if (files.length === 0 && imagesState.length === 0) {
                form.append('removeAllImages', 'true');
                form.append('images', JSON.stringify([]));
            }

            if (deletedImages.length > 0) {
                form.append('deletedImages', JSON.stringify(deletedImages));
            }

            // Manejar archivos de documentos
            documents.forEach(doc => {
                form.append(doc.fieldName, doc.file);
            });

            files.forEach(file => form.append('images', file));

            body = form;

            const json = await fetcher(url, {
                method,
                body,
                auth: true
            });

            setShow(false);
            if (method === "POST") {
                setData((prevData) => [...prevData, json]);
                setFormData(initialFormState);
            } else {
                setData((prevData) =>
                    prevData.map((item) => (item._id === editId ? { ...item, ...json } : item))
                );
                setFormData(prev => ({ ...prev, ...json }));
            }
            setFiles([]);
            setDocuments([]);
            setDeletedImages([]);
            setDeletedDocuments([]);
        } catch (error) {
            console.error("Error al enviar el formulario:", error.message); 
        }
    };

    const handleImageChange = (e) => {
        const selected = Array.from(e.target.files || []);
        
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        const invalidFiles = selected.filter(file => !validTypes.includes(file.type));
        
        if (invalidFiles.length > 0) {
            alert('Solo se permiten archivos de imagen (JPG, PNG, GIF, WEBP)');
            return;
        }
        
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
        
        e.target.value = '';
    };

    const handleDocumentChange = (e) => {
        const fieldName = e.target.name;
        const selected = Array.from(e.target.files || []);
        
        if (selected.length === 0) return;
        
        // Obtener tipos válidos del campo específico
        const field = fields.find(f => f.name === fieldName);
        const acceptedTypes = field?.accept || '';
        
        // Convertir extensiones a MIME types
        const extensionToMime = {
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
            '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            '.xls': 'application/vnd.ms-excel',
            '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            '.ppt': 'application/vnd.ms-powerpoint',
            '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            '.csv': 'text/csv',
            '.txt': 'text/plain',
            '.zip': 'application/zip'
        };

        const validTypes = acceptedTypes.split(',').map(ext => extensionToMime[ext.trim()]).filter(Boolean);
        
        const invalidFiles = selected.filter(file => !validTypes.includes(file.type));
        
        if (invalidFiles.length > 0) {
            alert(`Solo se permiten archivos de tipo: ${acceptedTypes}`);
            return;
        }
        
        const newDocuments = selected.map(f => ({
            file: f,
            name: f.name,
            size: f.size,
            type: f.type,
            fieldName: fieldName
        }));
        
        setDocuments(prev => [...prev.filter(doc => doc.fieldName !== fieldName), ...newDocuments]);
        
        // Actualizar formData con un indicador de que hay archivos
        setFormData(prev => ({ 
            ...prev, 
            [fieldName]: newDocuments
        }));
        
        e.target.value = '';
    };

    const removeImage = (index) => {
        const target = formData.images?.[index];

        if (target && !target.file && typeof target === 'string') {
            setDeletedImages(prev => [...prev, target]);
        }

        const updatedFiles = target?.file
            ? files.filter(f => f !== target.file)
            : files;

        if (target?.preview) {
            URL.revokeObjectURL(target.preview);
        }

        const updatedImages = (formData.images || []).filter((_, i) => i !== index);

        setFiles(updatedFiles);
        setFormData(prev => ({ ...prev, images: updatedImages }));
    };

    return <>
        
        {show && (
        <form onSubmit={handleSubmit} ref={formRef} className='form'>
            {fields.map(({ name, label, type = 'text', placeholder = '', required = false, accept, options }) => {
                if (type === 'file') {
                    return (
                        <div key={name}>
                            <label htmlFor={name} style={{ display: 'block', marginBottom: '.3rem' }}>
                                {label}
                            </label>
                            <input
                                id={name}
                                name={name}
                                type="file"
                                accept={accept}
                                onChange={handleDocumentChange}
                                required={required}
                                style={{ padding: '.5rem', width: '100%', fontFamily: 'sans-serif'}}
                            />
                            {formData[name] && formData[name].length > 0 && (
                                <div style={{ marginTop: '10px', padding: '8px', backgroundColor: '#f0f9ff', border: '1px solid #bfdbfe', borderRadius: '4px' }}>
                                    <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#1e40af' }}>
                                        ✅ Documentos seleccionados ({formData[name].length}):
                                    </p>
                                    <ul style={{ fontSize: '12px', color: '#374151', margin: 0, paddingLeft: '16px' }}>
                                        {formData[name].map((doc, index) => (
                                            <li key={index} style={{ marginBottom: '4px' }}>
                                                📄 <strong>{doc.name}</strong> ({(doc.size / 1024).toFixed(1)}KB)
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}</div>
                    );
                }

                if (type === 'select') {
                    return (
                        <div key={name}>
                            <label htmlFor={name} style={{ display: 'block', marginBottom: '.3rem' }}>
                                {label}
                            </label>
                            <select
                                id={name}
                                name={name}
                                value={formData[name] || ''}
                                onChange={handleChange}
                                required={required}
                                style={{ padding: '.5rem', width: '100%', fontFamily: 'sans-serif'}}
                            >
                                <option value="">Seleccionar...</option>
                                {options?.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );
                }

                if (type === 'textarea') {
                    return (
                        <div key={name}>
                            <label htmlFor={name} style={{ display: 'block', marginBottom: '.3rem' }}>
                                {label}
                            </label>
                            <textarea
                                id={name}
                                name={name}
                                placeholder={placeholder}
                                value={formData[name] || ''}
                                onChange={handleChange}
                                required={required}
                                rows="4"
                                style={{ padding: '.5rem', width: '100%', fontFamily: 'sans-serif', resize: 'vertical'}}
                            />
                        </div>
                    );
                }

                return (
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
                );
            })}

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

