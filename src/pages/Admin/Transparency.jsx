// src/pages/Admin/Transparency.jsx
import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import DataGridTable from '../../components/DataGridTable/DataGridTable';
import { fetcher } from '../../utils/fetcher';

export default function AdminTransparency() {
  const [docs, setDocs] = useState([]);

  // Campos para el Form (DataGridTable -> Form)
  const fields = [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      placeholder: 'Ej. Estados 2024',
      required: true,
    },
    {
      name: 'category',
      label: 'Categoría',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Todas' },
        { value: 'financial', label: 'Presupuesto y gastos' },
        { value: 'hiring', label: 'Contrataciones' },
        { value: 'staff', label: 'Personal' },
        { value: 'regulations', label: 'Normativa' },
        { value: 'projects', label: 'Proyectos y resultados' },
        { value: 'access', label: 'Accesos a la información' },
        { value: 'participation', label: 'Participación ciudadana' },
      ],
    },
    { name: 'publishedAt', label: 'Fecha de publicación', type: 'date' },
    { name: 'period', label: 'Periodo', type: 'text', placeholder: '2025-Q2' },
    {
      name: 'tags',
      label: 'Tags',
      type: 'text',
      placeholder: 'separadas, por, coma',
    },
    { name: 'description', label: 'Descripción', type: 'textarea' },
    {
      name: 'file',
      label: 'Archivo',
      type: 'file',
      accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.zip',
      required: false,
    },
  ];

  // Columnas visibles en la tabla
  const tableFields = ['title', 'category', 'publishedAt'];

  const route = 'api/transparency';

  useEffect(() => {
    fetchDocs();
  }, []);
  async function fetchDocs() {
    const data = await fetcher(route + '/admin/all', {
      method: 'GET',
      auth: true,
    });
    console.log('Fetched transparency docs:', data);
    setDocs(data.items || data);
  }

  return (
    <AdminLayout>
      <DataGridTable
        data={docs}
        setData={setDocs}
        fields={fields}
        tableFields={tableFields}
        route={route}
      />
    </AdminLayout>
  );
}
