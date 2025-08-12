// AdminPanel.jsx
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import Form from '../Form/Form';
import { fetcher } from '../../utils/fetcher';
import { dateFormatter } from '../../utils/dateFormatter';

export default function DataGridTable( {fields, tableFields, data, setData, route} ) {
  const [view, setView] = useState('grid');

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false)

  const formRef = useRef(null)
  const editRef = useRef(null)

  const [itemId, setItemId] = useState(' ')

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

    const [editItem, setEditItem] = useState('')
    useEffect(() => {
      setEditItem(data.find(item => item._id === itemId))
      
    }, [itemId])

    function handleEdit(id) {
      setItemId(id)               
      setShowEditForm(true)       
    }


    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(editRef.current && !editRef.current.contains(e.target)) {
                setShowEditForm(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showEditForm])

  async function deleteItem(id) {
    const response = await fetcher(route + '/' + id, {
      method: 'DELETE',
      auth: true
    }) 
    setData(prevData => prevData.filter(item => item._id != id))
    console.log("Response del DELETE: ", response)
  }

  return (
    <div className="admin-panel">
      <div className="view-toggle">
        <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
          </button>
        <button onClick={() => setView('table')} className={view === 'table' ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
          </button>
      </div>

      {view === 'grid' ? (
        <div className="grid-view">
          {data.map(item => (
            <div className="gridcard" key={item._id}>
              <h3>{item.name}</h3>
              {item.title? <h3> {item.title}</h3> : <></>}
              {item.startDate && item.endDate && (<>
                <p>Fecha de inicio: {dateFormatter(item.startDate)}</p>
                <p>Fecha de cuerre: {dateFormatter(item.endDate)}</p>
              </>)}
              {item.date ? <p>Fecha de inicio: {dateFormatter(item.date)}</p> : null}
              {item.message? <p>{item.message}</p> : <></>}
              {item.content? <p>{item.content}</p> : <></>}
              {item.status? <p>Status: {item.status}</p> : <></>}
              {item.location? <p>Location: {item.location}</p> : <></>}
              
              

              <div className='actions'>
                <button onClick={() => handleEdit(item._id)} className='editBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="216" y1="216" x2="96" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              </button>
              <button onClick={() => deleteItem(item._id)} className='deleteBtn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="table-view">
          <thead>
            <tr>
              {tableFields.map((field, i) => (
                <th key={i}>{field}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                {tableFields.map((field, i) => (
                  <td key={i}>
                    {field === 'startDate' || field === 'endDate'
                    ? dateFormatter(item[field])
                    : item[field]}
                  </td>
                ))}
                <td className='actions'><button onClick={() => handleEdit(item._id)} className='editBtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="216" y1="216" x2="96" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                </button>
                <button onClick={() => deleteItem(item._id)} className='deleteBtn'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className='formDropdown' onClick={() => setShowForm(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
          Agregar
      </button>
      <Form show={showForm} setShow={setShowForm} fields={fields} route={route} method='POST' setData={setData} submitText='Enviar' formRef={formRef}></Form>
      <Form show={showEditForm} setShow={setShowEditForm} fields={fields} data={editItem} route={route + '/' + itemId} method='PUT' editId={itemId} setData={setData} submitText='Guardar' formRef={editRef}></Form>
    </div>
  );
}
