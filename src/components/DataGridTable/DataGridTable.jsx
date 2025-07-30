// AdminPanel.jsx
import React, { useState } from 'react';
import './style.css';
import AddItemForm from '../AddItemForm/AddItemForm';


export default function DataGridTable( {fields, tableFields, data, postRoute} ) {
  const [view, setView] = useState('grid');

  return (
    <div className="admin-panel">
      <div className="view-toggle">
        <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
          </button>
        <button onClick={() => setView('table')} className={view === 'table' ? 'active' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
          </button>
      </div>

      {view === 'grid' ? (
        <div className="grid-view">
          {data.map(item => (
            <div className="gridcard" key={item._id}>
              <h3>{item.name}</h3>
              <p>Fecha de inicio: {item.startDate}</p>
              <p>Fecha de cuerre: {item.endDate}</p>
              <p>Status: {item.status}</p>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="table-view">
          <thead>
            <tr>
              {tableFields.map((field) => (
                <th>{field}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                {tableFields.map((field) => (
                  <td>{item[field]}</td>
                ))}
                <td><button>Editar</button>
                <button>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <AddItemForm fields={fields} postRoute={postRoute} submitText='Enviar'></AddItemForm>
    </div>
  );
}
