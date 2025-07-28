// AdminPanel.jsx
import React, { useState } from 'react';
import './style.css';
import Form from '../../components/Form/Form'


export default function DataGridTable( {fields, tableFields, dummyData} ) {
  const [view, setView] = useState('grid');

  return (
    <div className="admin-panel">
      <div className="view-toggle">
        <button onClick={() => setView('grid')} className={view === 'grid' ? 'active' : ''}>🔲 Grid</button>
        <button onClick={() => setView('table')} className={view === 'table' ? 'active' : ''}>📋 Tabla</button>
      </div>

      {view === 'grid' ? (
        <div className="grid-view">
          {dummyData.map(item => (
            <div className="gridcard" key={item.name}>
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
            {dummyData.map(item => (
              <tr key={item.id}>
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
      <Form fields={fields} onSubmit={(data) => console.log(data)} submitText='Enviar'></Form>
    </div>
  );
}
