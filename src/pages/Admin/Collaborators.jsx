import AdminLayout from './AdminLayout';
import DataGridTable from '../../components/DataGridTable/DataGridTable';
import { useEffect, useState } from 'react';
import { fetcher } from '../../utils/fetcher';

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState([]);

  const fields = [
    {
      name: 'name',
      label: 'Nombre del colaborador',
      type: 'text',
      placeholder: 'Ingrese nombre del colaborador',
      required: true,
    },
    {
      name: 'order',
      label: 'Orden de aparición (menor número = aparece primero)',
      type: 'number',
      placeholder: 'Ej: 1, 2, 3... (dejar vacío para agregar al final)',
      required: false,
    },
  ];
  
  // Nota: Las imágenes se manejan con el input de imágenes del Form (al final del formulario)

  // Displayed fields (table form)
  const tableFields = ['name', 'logo', 'order'];

  const route = 'api/collaborators';

  useEffect(() => {
    fetchCollaborators();
  }, []);

  const fetchCollaborators = async () => {
    const data = await fetcher('api/collaborators', {
      method: 'GET',
    });
    setCollaborators(data);
  };

  return (
    <>
      <AdminLayout>
        <DataGridTable
          data={collaborators}
          setData={setCollaborators}
          fields={fields}
          tableFields={tableFields}
          route={route}
          imageHelpText="📸 Sube el logo de la empresa u organización colaboradora (JPG, PNG o WEBP)"
        ></DataGridTable>
      </AdminLayout>
    </>
  );
}
