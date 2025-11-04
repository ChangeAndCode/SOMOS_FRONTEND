import AdminLayout from './AdminLayout';
import DataGridTable from '../../components/DataGridTable/DataGridTable';
import { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const route = 'api/testimonies';
  async function fetchTestimonies() {
    const data = await fetcher(route, {
      method: 'GET',
    });
    setTestimonies(data);
  }

  const fields = [
    {
      name: 'name',
      label: 'Nombre del proyecto',
      type: 'text',
      placeholder: 'Ingrese nombre del proyecto',
      required: true,
    },
    {
      name: 'message',
      label: 'Mensaje del testimonio',
      type: 'text',
      placeholder: 'Agradecimiento especial a: ',
      required: false,
    },
  ];

  // Displayed fields (table form)
  const tableFields = ['name', 'message'];

  return (
    <>
      <AdminLayout>
        <DataGridTable
          data={testimonies}
          setData={setTestimonies}
          route={route}
          fields={fields}
          tableFields={tableFields}
        ></DataGridTable>
      </AdminLayout>
    </>
  );
}
