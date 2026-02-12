import AdminLayout from './AdminLayout';
import { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';
import DataGridTable from '../../components/DataGridTable/DataGridTable';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const data = await fetcher('api/notes', {
      method: 'GET',
      auth: true,
    });
    setNotes(data);
  };

  const fields = [
    {
      name: 'title',
      label: 'Titulo',
      type: 'text',
      placeholder: 'Ingrese nombre del proyecto',
      required: true,
    },
    {
      name: 'content',
      label: 'Contenido',
      type: 'text',
      placeholder: 'Ingrese descripcion del proyecto',
      required: true,
    },
  ];

  const tableFields = ['title', 'content'];

  const route = 'api/notes';

  return (
    <AdminLayout>
      <section className="admin-section">
        <h2 className="admin-section-title">Notas</h2>
        <DataGridTable
          data={notes}
          setData={setNotes}
          fields={fields}
          tableFields={tableFields}
          route={route}
        />
      </section>
    </AdminLayout>
  );
}
